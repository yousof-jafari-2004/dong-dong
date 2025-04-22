<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;

class Chat implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    // public $chat;
    // public $user;
    /**
     * Create a new event instance.
     */
    public function __construct()
    {
        // $this->user = $user;
        // $this->chat = $chat;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('chat-chanel'),
        ];
    }
}
