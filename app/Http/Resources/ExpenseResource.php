<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            'people' => $this->People,
            'group' => $this->Group,
            'counting_order' => $this->counting_order,
            'total_payment' => $this->total_payment,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
