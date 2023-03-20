<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            {{-- <th>Email</th> --}}
        </tr>
    </thead>
    <tbody>
        @foreach($skills as $skill)
        <tr>
            <td>{{$skill->id}}</td>
            <td>{{$skill->content}}</td>
            {{-- <td>{{ $dado->name }}</td> --}}
            {{-- <td>{{ $skills }}</td> --}}
            {{-- <h2>Novo post realiado {{ $data['name'] }}</h2> --}}

            {{-- <p>{{ $data['content'] }}</p> --}}
        </tr>
        @endforeach
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
        </tr>
    </thead>
    <tbody>
        @foreach($developers as $developer)
        <tr>
            <td>{{$developer->id}}</td>
            <td>{{$developer->name}}</td>
            <td>{{$developer->positions}}</td>
        </tr>
        @endforeach
    </tbody>
</table>
