<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    // change user name
    public function changeName(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'user_name' => ['required', Rule::unique('users')->ignore($request->user()->id)],
        ]);

        $user = $request->user()->update($data); 
        return $request->user();
    }

    // change password
    public function changePass(Request $request)
    {
        $data = $request->validate([
            'password' => ['required', Password::min(8)]
        ]);

        $request->user()->update([
            'password' => bcrypt($data['password']),
        ]);
    }
}
