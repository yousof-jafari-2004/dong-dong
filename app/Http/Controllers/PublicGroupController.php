<?php

namespace App\Http\Controllers;

use App\Models\PublicGroup;
use Illuminate\Http\Request;
use App\Http\Resources\GroupResource;
use App\Http\Resources\PublicGroupResource;

class PublicGroupController extends Controller
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

        // return $users;

        $group = $request->user()->PublicGroup()->create([
            'name' => $data['name'],
        ]);

        foreach($users as $user){
            $group->Users()->attach($user);
        }
        $group->Users()->attach($request->user()->id);
        return $data;
    }

    public function index(Request $request)
    {
        $groups = $request->user()->PublicGroups;


        return PublicGroupResource::collection($groups);
    }

    public function delete(PublicGroup $group)
    {
        $group->delete();
    }
}
