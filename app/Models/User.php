<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'avatar_url',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function conversations(){
        return $this->belongsToMany(Conversation::class,'participants')
            ->latest('last_message_id')
            ->withPivot([
                'role','joined_at'
            ]);
    }
    public function sent_messages(){
        return $this->hasMany(Message::class,'user_id','id');
    }

    public function receivedMessages(){
        return $this->belongsToMany(Message::class,'recipients')
            ->withPivot([
               'read_at','deleted_at'
            ]);
    }

    public function getAvatarUrlAttribute(){
        return 'https://ui-avatars.com/api/?name='.$this->name.'&background=0D8ABC&color=fff';
    }
}
