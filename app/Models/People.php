<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Groups;
use App\Models\User;

class People extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function Groups()
    {
        return $this->belongsToMany(Groups::class);
    }

    public function User()
    {
        return $this->belongsTo(User::class);
    }
}
