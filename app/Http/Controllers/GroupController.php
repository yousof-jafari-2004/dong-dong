<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Groups;
use App\Http\Resources\GroupResource;

class GroupController extends Controller
{
    public function create(Request $request)
    {
        // return $request->users;
        $users = [];

        $data = $request->validate([
            'name' => 'required',
        ]);

        foreach($request->users as $user)
        {
            array_push($users, $user['id']);
        }

        $group = $request->user()->Groups()->create([
            'name' => $data['name'],
        ]);

        foreach($users as $user){
            $group->Peoples()->attach($user);
        }
        return $data;
    }

    public function index(Request $request)
    {
        $groups = Groups::where('user_id', $request->user()->id)->get();

        return GroupResource::collection($groups);
    }

    public function delete(Groups $group)
    {
        $group->delete();
    }
}
