<?php

namespace App\Http\Controllers;

use App\Models\Counselor;


class CounselorController extends Controller
{
    public function index()
    {
        $counselor = Counselor::all();
        return response()->json([$counselor], 200);
    }
}