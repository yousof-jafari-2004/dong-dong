<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ExpenseResource;
use App\Models\Expenses;

class ExpenseController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'people_id' => 'required',
            'group_id' => 'required',
            'counting_order' => 'required',
            'total_payment' => 'required',
        ]);

        $request->user()->Expense()->create([
            'name' => $data['name'],
            'people_id' => $data['people_id'],
            'group_id' => $data['group_id'],
            'counting_order' => $data['counting_order'],
            'total_payment' => $data['total_payment'],
        ]);

        return $data;
    }

    public function index(Request $request)
    {
        return ExpenseResource::collection(Expenses::where('user_id', $request->user()->id)->get());
    }

    public function delete(Expenses $expenses)
    {
        $expenses->delete();
        return 'hi';
    }
}
