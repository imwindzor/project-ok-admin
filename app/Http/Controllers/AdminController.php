<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;

class AdminController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        $request->validate([
            'last_name' => ['required'],
            'first_name' => ['required'],
            'middle_name' => ['required'],
            'university' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed', 'min:8'],
            'password_confirmation' => ['required', 'same:password', 'min:8']
        ]);

        $user = Admin::create([
            'last_name' => $request->last_name,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'university' => $request->university,
            'email' => $request->email,
        ])->user()->create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => "admin"
        ]);

        $credentials = ['email' =>  $request->email, 'password' => $request->password];

        if (Auth::attempt($credentials)) {
            // $request->session()->regenerate();

            $user = Auth::user();
            $type = $user->type;
            $user = $type == "admin" ?  Admin::where('_id', $user->admin_id)->first() : "Error";


            return response()->json([
                'success' => true,
                '_id' => $user->_id,
                '_lastname' => $user->last_name,
                '_firstname' => $user->first_name,
                '_type' => $type,
            ], 200);
        }
    }

    public function showCounselorSchedule()
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}