<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class AdminChed extends Model
{
    protected $collection = 'adminsched';
    protected $primaryKey = '_id';
    protected $fillable = [
        'last_name',
        'first_name',
        'middle_name',
        'email',
       
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'adminched_id', '_id');
    }
}
