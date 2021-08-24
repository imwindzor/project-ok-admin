<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Counselor extends Model
{
    protected $collection = 'counselor';
    protected $primaryKey = '_id';
}

