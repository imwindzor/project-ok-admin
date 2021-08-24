<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Auth;
use App\Models\Student;


class StudentController extends Controller
{
    public function index()
    {
        $student = Student::all();
        return response()->json([$student], 200);
    }
}