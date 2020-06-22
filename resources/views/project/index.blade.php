<ul>
    @foreach($project as $pro)
    <li>
        {{ $pro->name }}
    </li>
    @endforeach
</ul>