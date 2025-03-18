<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;

class PublicExpenseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'user' => $this->user,
            'users' => $this->users,
            'buyer' => User::where('id', $this->buyer_id)->get()[0],
            'counting_order' => $this->counting_order,
            'total_payment' => $this->total_payment,
            'public' => $this->public ? true : false,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
