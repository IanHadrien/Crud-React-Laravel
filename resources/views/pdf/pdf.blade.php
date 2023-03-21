<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Relatorios</title>
</head>
<body>
    <h2>Habilidades</h2>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Habilidade</th>
          </tr>
        </thead>
        <tbody>
            @foreach($skills as $skill)
            <tr>
                <td>{{$skill->id}}</td>
                <td>{{$skill->content}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <h2>Desenvolvedores</h2>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Cargo</th>
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

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>

{{-- <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
        </tr>
    </thead>
    <tbody>
        @foreach($skills as $skill)
        <tr>
            <td>{{$skill->id}}</td>
            <td>{{$skill->content}}</td>
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
</table> --}}
