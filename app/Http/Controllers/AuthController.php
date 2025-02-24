<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'user_name' => ['required', 'unique:users,user_name'],
            'password' => [
                'required',
                'confirmed',
                Password::min(8),
            ]
        ]);

        $user = User::create([
            'name' => $data['name'],
            'user_name' => $data['user_name'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        // return response
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        // validate data
        $credentials = $request->validate([
            'user_name' => ['required', 'exists:users,user_name'],
            'password' => ['required'],
        ]);

        if(!Auth::attempt($credentials)) {
            return response([
                'error' => 'اطلاعات وارد شده درست نمیباشد',
            ], 422);
        }

        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token,
        ], 200);


        return $request->email;
    }
}
