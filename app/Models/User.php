<?php

namespace App\Models;

use Jenssegers\Mongodb\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // use HasFactory, Notifiable;
    protected $primaryKey = '_id';
    protected $collection = 'users';

    protected $fillable = [
        'email',
        'password',
        'type'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }


    public function adminched()
    {
        return $this->belongsTo(AdminChed::class, 'adminched_id');
    }
    
}