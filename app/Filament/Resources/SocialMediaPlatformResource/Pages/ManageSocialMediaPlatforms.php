<?php

namespace App\Filament\Resources\SocialMediaPlatformResource\Pages;

use App\Filament\Resources\SocialMediaPlatformResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageSocialMediaPlatforms extends ManageRecords
{
    protected static string $resource = SocialMediaPlatformResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
