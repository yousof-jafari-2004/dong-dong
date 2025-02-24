<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expenses extends Model
{
    protected $fillable = [
        'user_id',
        'people_id', 
        'group_id', 
        'counting_order', 
        'total_payment', 
        'name',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function Group()
    {
        return $this->belongsTo(Groups::class);
    }

    public function People()
    {
        return $this->belongsTo(People::class);
    }

    use HasFactory;
}
