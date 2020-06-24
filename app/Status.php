<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $fillable = [
       'user_id','status'
    ];
    protected $table = 'statuses';

    public function user(){

        return $this->belongsTo(User::class)->select(['id','name']);

    }

}
