<?php

namespace App\Http\Controllers;

use App\Models\Expenses;
use App\Models\Groups;
use App\Models\People;
use Illuminate\Http\Request;
use PHPUnit\Framework\Attributes\Group;

class TotalCalculation extends Controller
{
    public function index(Request $request)
    {
        $a = [];
        $final = [];
        $expenses = Expenses::where('user_id', $request->user()->id)->where('counting_order', $request->id)->get();
        // return $expenses;
        foreach($expenses as $expense)
        {   
            $arr = [
                'buyer' => $expense->people_id,
                'buyer_name' => $expense->People->name,
                'group' => [],
                'total_pay' => $expense->total_payment,
            ];

            foreach ($expense->Group->Peoples as $member)
            {
                array_push($arr['group'], [
                    'id' => $member->id,
                    'name' =>  People::where('id', $member['id'])->get()[0]->name,
                    'each' => $expense->total_payment / count($expense->Group->Peoples),
                ]);
            }

            array_push($a, $arr);

        }

        // return $a;

        // Step 1: Group by 'name'
        $grouped_by_name = [];
        foreach ($a as $item) {
            $name = $item['buyer'];
            if (!isset($grouped_by_name[$name])) {
                $grouped_by_name[$name] = [
                    'buyer' => $name,
                    'buyer_name' => People::where('id', $name)->get()[0]->name,
                    'total_pay' => 0,
                    'group' => []
                ];
            }
            $grouped_by_name[$name]['total_pay'] += $item['total_pay'];
            foreach ($item['group'] as $group_item) {
                $group_id = $group_item['id'];
                $group_total = $group_item['each'];
                if (!isset($grouped_by_name[$name]['group'][$group_id])) {
                    $grouped_by_name[$name]['group'][$group_id] = [
                        'id' => $group_id,
                        'name' => People::where('id', $group_item['id'])->get()[0]->name,
                        'each' => $group_total
                    ];
                } else {
                    $grouped_by_name[$name]['group'][$group_id]['each'] += $group_total;
                }
            }
        }

        // Step 2: Compare 'group' IDs with 'name' values
        foreach ($grouped_by_name as $name => &$data) {
            foreach ($data['group'] as $group_id => &$group_item) {
                // Check if the group ID matches another 'name'
                if (isset($grouped_by_name[$group_id])) {
                    // Find the corresponding 'group' item in the other 'name'
                    if (isset($grouped_by_name[$group_id]['group'][$name])) {
                        $other_group_item = $grouped_by_name[$group_id]['group'][$name];
                        $total1 = $group_item['each'];
                        $total2 = $other_group_item['each'];

                        if ($total1 > $total2) {
                            $group_item['each'] = $total1 - $total2;
                            $grouped_by_name[$group_id]['group'][$name]['each'] = 0;
                        } else {
                            $grouped_by_name[$group_id]['group'][$name]['each'] = $total2 - $total1;
                            $group_item['each'] = 0;
                        }
                    }
                }
            }
        }

        // Step 3: Convert the grouped result back to a sequential array
        $final_result = array_values(array_map(function ($item) {
            $item['group'] = array_values($item['group']);
            return $item;
        }, $grouped_by_name));

        return $final_result;
    }

    public function steps(Request $request)
    {
        $allExpenses = $request->user()->Expense;
        $data = [];
        foreach($allExpenses as $item)
        {
            array_push($data, $item['counting_order']);
        }
        $data = array_unique($data);
        return $data;
    }
}
