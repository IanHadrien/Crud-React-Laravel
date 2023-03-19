<?php

namespace App\Http\Controllers;

use App\Models\Developer;
use App\Http\Requests\StoreDeveloperRequest;
use App\Http\Requests\UpdateDeveloperRequest;
use Inertia\Inertia;

class DeveloperController extends Controller
{
    public function index()
    {
        $developer = Developer::all();
        return Inertia::render('Developer/Index');
    }

    public function create()
    {
        return Inertia::render('Developer/Create');
    }

    public function store(StoreDeveloperRequest $request)
    {
        //
    }

    public function show(Developer $developer)
    {
        //
    }

    public function edit(Developer $developer)
    {
        //
    }

    public function update(UpdateDeveloperRequest $request, Developer $developer)
    {
        //
    }

    public function destroy(Developer $developer)
    {
        //
    }
}
