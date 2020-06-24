<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel='stylesheet' href='/css/app.css'>
    </head>
    <body>
        <div id='app'>
            <ul>
                <li v-for="skill in skills">@{{ skill }}</li>
            </ul>
        </div>
        <div id='router'>
            @include('layouts.nav')
            <section>
                <div class='container'>
                    <router-view></router-view>
                </div>
            </section>            
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
