<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\FriendRequest;

class FriendController extends Controller
{
    public function index(Request $request)
    {
        $friends = [];

        $users = Friend::where('user_id', $request->user()->id)->get();

        foreach($users as $user)
        {
            array_push($friends, [
                'id' => $user->user_id_2,
                'name' => User::where('id', $user->user_id_2)->get()[0]->name,
            ]);
        }

        return $friends;
    }

    public function find(Request $request)
    {
        $users = [];
        $user = User::where('user_name', $request->user_name)->get();
        foreach ($user as $item)
        {
            $a = [
                'name' => $item->name,
                'id' => $item->id, 
                'requested' => (count(FriendRequest::where('to_user_id', $item->id)->where('user_id', $request->user()->id)->get()) > 0) ? true : false,
                'is_friend' => (count(Friend::where('user_id', $request->user()->id)->where('user_id_2', $item->id)->get()) > 0) ? true : false,
            ];
            array_push($users, $a);
        }
        return $users;
    }

    public function request(Request $request){
        FriendRequest::create([
            'user_id' => $request->user()->id,
            'to_user_id' => $request->id,
        ]);
    }

    public function requests(Request $request)
    {
        $users = [];
        $requests = FriendRequest::where('to_user_id', $request->user()->id)->get();

        foreach($requests as $item)
        {
            array_push($users, [
                'id' => $item->id,
                'user' => [
                    'id' => User::where('id' ,$item->user_id)->get()[0]->id,
                    'name' => User::where('id' ,$item->user_id)->get()[0]->name,
                    'user_name' => User::where('id' ,$item->user_id)->get()[0]->user_name,
                ],
                'created_at' => $item->created_at->diffForHumans(),
            ]);


        }
        return $users;
    }

    public function accept(Request $request)
    {
        if((count(Friend::where('user_id', $request->user()->id)->where('user_id_2', $request->id)->get()) > 0) || (count(Friend::where('user_id_2', $request->user()->id)->where('user_id', $request->id)->get()) > 0)){

        }else {
            Friend::create([
                'user_id' => $request->user()->id,
                'user_id_2' => $request->id,
            ]);
            Friend::create([
                'user_id' => $request->id,
                'user_id_2' => $request->user()->id,
            ]);

            FriendRequest::where('id', $request->reqId)->delete();
        }
    }

    public function reject(Request $request)
    {
        FriendRequest::where('id', $request->reqId)->delete();
    }

    public function remove(Request $request)
    {
        Friend::where('user_id', $request->user()->id)->where('user_id_2', $request->id)->delete();
        Friend::where('user_id', $request->id)->where('user_id_2', $request->user()->id)->delete();
    }
}
