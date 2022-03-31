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
<main
    class=""
    x-data="game"
    @keyup.window="onKeyPress($event.key)"
>
    <h1 aria-label="TryCat">
        <img src="/images/trycat-logo.svg" alt="logo">
    </h1>
    <div id="game">
        <template x-for="(row, index) in board">
            <div
                class="row"
                :class="{'current': currentRowIndex === index, 'invalid': currentRowIndex === index && errors}"
            >
                <template x-for="tile in row">
                    <div class="tile" :class="tile.status" x-text="tile.letter"></div>
                </template>
            </div>
        </template>
    </div>
    <div id="keyboard" @click.stop="$event.target.matches('button') && onKeyPress($event.target.textContent)">
        <template x-for="row in letters">
            <div class="row">
                <template x-for="key in row">
                    <button type="button" x-text="key"></button>
                </template>
            </div>
        </template>
    </div>
    <output x-text="message"></output>
</main>

</body>
</html>
