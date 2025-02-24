<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\People;

class Groups extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function Peoples()
    {
        return $this->belongsToMany(People::class);
    }
}
