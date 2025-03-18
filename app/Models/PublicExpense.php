<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PublicExpense extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'buyer_id',
        'counting_order',
        'total_payment',
        'name',
        'public',
        'group_id'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
