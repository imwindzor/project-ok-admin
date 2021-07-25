<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Admin extends Model
{
    protected $collection = 'admins';
    protected $primaryKey = '_id';
    protected $fillable = [
        'last_name',
        'first_name',
        'middle_name',
        'university',
        'email',
       
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'admin_id', '_id');
    }
}
