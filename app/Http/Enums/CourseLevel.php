<?php

namespace App\Http\Enums;
use Filament\Support\Contracts\HasLabel;

enum CourseLevel: string implements HasLabel
{
    case Beginner = 'beginner';
    case Intermediate = 'intermediate';
    case Advance = 'advance';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Beginner => 'Beginner',
            self::Intermediate => 'Intermediate',
            self::Advance => 'Advance',
        };
    }
}
