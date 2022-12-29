<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeBasicInfo extends Model
{
    use HasFactory;
    protected $table = 'RESUME_BASIC_INFO';    
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'full_name',
        'phone_number',
    ];
}
