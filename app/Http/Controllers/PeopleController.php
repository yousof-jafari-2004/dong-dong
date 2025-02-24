<?php

namespace App\Http\Controllers;

use App\Models\People;
use Illuminate\Http\Request;
use App\Http\Resources\PeopleResource;

class PeopleController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
        ]);
        $request->user()->Peoples()->create([
            'name' => $data['name'],
        ]);
    }

    public function index(Request $request)
    {
        // return People::all();
        // return $request->user()->id;
        return People::where('user_id', $request->user()->id)->get();
    }

    public function delete(People $people)
    {
        $people->delete();
    }
}
