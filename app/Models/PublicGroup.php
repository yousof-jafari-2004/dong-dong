<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class PublicGroup extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
    ];

    public function Users()
    {
        return $this->belongsToMany('App\Models\User','public_groups_users', 'public_group_id', 'user_id');
    }

    public function Expenses()
    {
        return $this->hasMany('App\Models\PublicExpense','public_groups', 'group_id');
    }
}
