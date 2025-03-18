<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\People;
use App\Models\Groups;
use App\Models\PublicExpense;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_name'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function Peoples()
    {
        return $this->hasMany(People::class);
    }

    public function Groups()
    {
        return $this->hasMany(Groups::class);
    }

    public function Expense()
    {
        return $this->hasMany(Expenses::class);
    }

    public function PublicGroups()
    {
        return $this->belongsToMany('App\Models\PublicGroup','public_groups_users', 'user_id', 'public_group_id');
    }

    public function PublicGroup()
    {
        return $this->hasMany(PublicGroup::class);
    }
    
    public function UserPublicExpense()
    {
        return $this->hasMany(PublicExpense::class);
    }
}
