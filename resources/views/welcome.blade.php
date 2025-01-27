<!DOCTYPE html>
<html>

<head>
    <title>ADMIN APP</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/js/app.jsx')
</head>

<body>
    <div id="app"></div>
    <script>
        window['APP_API_URL'] = "{{env('APP_API_URL')}}";
        window['csrf_token'] = "{{ csrf_token() }}";
    </script>
</body>

</html>
