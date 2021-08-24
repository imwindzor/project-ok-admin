<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Models\User;
use App\Models\Admin;
use App\Models\AdminChed;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required', 'min:8']
        ]);

        if (Auth::attempt($credentials)) {
            // $user = DB::table('')
            // $request->session()->regenerate();

            $user = Auth::user();
            $type = $user->type;
            $user = $type == "adminched" ?  AdminChed::where('_id', $user->adminched_id)->first() : Admin::where('_id', $user->admin_id)->first();
            return response()->json([
                'success' => true,
                '_id' => $user->_id,
                '_lastname' => $user->last_name,
                '_firstname' => $user->first_name,
                '_type' => $type,
            ], 200);
        }

        return response()->json(['success' => false], 401);
    }
}
