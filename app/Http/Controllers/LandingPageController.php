<?php

namespace App\Http\Controllers;

use App\Models\AdditionalProgram;
use App\Models\Advertisement;
use App\Models\Hero;
use App\Models\Program;
use App\Models\Testimonial;
use App\Models\WhyChooseUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(Request $request)
    {
        $heroes = Hero::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'title', 'subtitle', 'image_url']);

        $advertisements = Advertisement::where('is_active', true)
            ->get(['id', 'name', 'description', 'url', 'image_url']);

        $programs = Program::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'name', 'description', 'image_url']);

        $additionalPrograms = AdditionalProgram::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'name', 'description', 'image_url']);

        $testimonials = Testimonial::where('is_active', true)
            ->get(['id', 'name', 'occupation', 'message', 'user_path']);

        $WhyChooseUsItems = WhyChooseUs::all();

        return Inertia::render('Welcome', [
            'heroes' => $heroes,
            'advertisements' => $advertisements,
            'programs' => $programs,
            'additionalPrograms' => $additionalPrograms,
            'testimonials' => $testimonials,
            'WhyChooseUsItems' => $WhyChooseUsItems,
        ]);
    }

    public function policy(Request $request)
    {
        return Inertia::render('Legals/PrivacyPolicy', [
        ]);
    }

    public function terms(Request $request)
    {
        return Inertia::render('Legals/TermsOfService', [
        ]);
    }

    public function copyright(Request $request)
    {
        return Inertia::render('Legals/Copyright', [
        ]);
    }

    public function faqs(Request $request)
    {
        return Inertia::render('Legals/Faqs', [
        ]);
    }
}
