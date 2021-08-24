<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Student extends Model
{
    protected $collection = 'students';
    protected $primaryKey = '_id';
}
