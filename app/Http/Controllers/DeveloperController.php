<?php

namespace App\Http\Controllers;

use App\Models\Developer;
use App\Http\Requests\StoreDeveloperRequest;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateDeveloperRequest;
use App\Mail\EmailTestMailable;
use App\Models\Skill;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use PharIo\Manifest\Email;

class DeveloperController extends Controller
{
    public function index()
    {
        $developer = Developer::all();
        $skill = Skill::all();
        return Inertia::render('Developer/Index', ['developers' => $developer, 'skills' => $skill]);
    }

    public function create()
    {
        return Inertia::render('Developer/Create');
    }

    public function store(StoreDeveloperRequest $request)
    {
        $data = $request->validated();
        $developer = Developer::create($data);

        Mail::to('contatoDev@gmail.com')->send(new EmailTestMailable($data));

        return Redirect::route('developers.create')->with('message', 'Desenvolvedor adicionado com sucesso!');
    }

    public function show(Developer $developer)
    {
        $skills = Skill::where('commentable_id', $developer->id)->get();
        // $skills = Skill::latest(where('commentable_id', $developer->id)->get());
        // Inertia::render('Post/show', ['comments' => $comments]);
        return Inertia::render('Developer/Show', ['developer' => $developer, 'skills' => $skills]);
    }

    public function edit(Developer $developer)
    {
        return Inertia::render('Developer/Edit', ['developer' => $developer]);
    }

    public function update(UpdateDeveloperRequest $request, Developer $developer)
    {
        $data = $request->validated();
        $developer->update($data);

        return Redirect::back()->with('message', 'Desenvolvedor atualizado');
    }

    public function skill(StoreSkillRequest $request, Developer $developer)
    {
        $data = $request->all();
        $developer->comments()->create($data);

        return Redirect::route('developers.show', ['developer' => $developer])->with('message', 'Skill adicionada com sucesso!');
    }

    public function destroy(Developer $developer)
    {
        $developer->delete();

        return Redirect::back()->with('message', 'Desenvolvedor deletado com sucesso!');
    }
}
