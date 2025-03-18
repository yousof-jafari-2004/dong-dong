<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use App\Events\ChatMessage;

class ChatController extends Controller
{
    public function create(Request $request)
    {
        $chat = Chat::create([
            'user_id' => $request->user()->id,
            'text' => $request->text,
            'group_id' => $request->group_id,
        ]);

        // broadcast(new ChatMessage($request->user ,$chat))->toOthers();

        return $chat;
    }

    public function index(Request $request)
    {
        $allChats = [];
        $chats = Chat::where('group_id', $request->group_id)->get();
        foreach($chats as $chat){
            $a = [
                'id' => $chat->id,
                'user' => $chat->User,
                'created_at' => $chat->created_at,
                'text' => $chat->text, 
                'sended_by_me' => ($chat->user_id == $request->user()->id) ? true : false,
            ];

            array_push($allChats, $a);
        }
        return $allChats;
    }
}
