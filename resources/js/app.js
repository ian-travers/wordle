document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => {
        return { guessesAllowed: 4, wordLength: 3 }
    })
})
