<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            "id" => $this->id,
            "role_id" => $this->role_id,
            "name" => $this->name,
            "middlename" => $this->middlename,
            "surname" => $this->surname,
            "username" => $this->username,
            "email" => $this->email,
            "email_verified_at" => $this->email_verified_at,
            "phone" => $this->phone,
            "bio" => $this->bio,
            "quote" => $this->quote,
            "birthday" => $this->birthday,
            "gender" => $this->gender,
            "cover_url" => $this->cover_path ? Storage::url($this->cover_path) : '/image/default_cover.jpg',
            "avatar_url" => $this->avatar_path ? Storage::url($this->avatar_path) : '/image/default_avatar.png',
            "role" => $this->role,
            "country" => $this->country,
            "city" => $this->city,
            "profession" => $this->profession,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
