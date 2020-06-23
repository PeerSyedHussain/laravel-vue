<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
        <div id='app' class='container'>
            
            <h2>Project</h2>

            <form method="post" action="{{ route('project.store')}}" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                @csrf
                <div class="form-group">
                    <label for="name">project Name</label>
                    <input autocomplete="off" type="text" class="form-control" name="name" id="name" placeholder="Project Name" v-model="form.name">
                    <span class='help text-danger' v-show="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                </div>
                <div class="form-group">
                    <label for="description">Project Description</label>
                    <input type="description" autocomplete="off" class="form-control" name="description" id="description" placeholder="Description" v-model="form.description">
                    <span class='help text-danger' v-show="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="form.errors.any()">Submit</button>
            </form>
            <example></example>
            <notification></notification>
            <h1>
                @{{ foo}}
                @{{ store_user_name.user.name}}
            </h1>
        </div>
        <div id='dummy'>
            <h1>
                @{{ foo}}
                @{{ store_user_name.user.name }}
            </h1>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" ></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" ></script>
        <script src="/js/app.js"></script>
    </body>
</html>
