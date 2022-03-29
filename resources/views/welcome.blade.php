<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TryCat</title>
    <link rel="stylesheet" href="/css/app.css">
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="/js/app.js"></script>
</head>
<body>
<div id="game" x-data="game">
    <template x-for="row in guessesAllowed">
        <div class="row">
            <template x-for="tile in wordLength">
                <div class="tile"></div>
            </template>
        </div>
    </template>
</div>
</body>
</html>
