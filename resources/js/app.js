document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => {
        return {
            guessesAllowed: 4,
            wordLength: 3,

            init() {
                this.board = Array.from({ length: this.guessesAllowed }, () => {
                    return Array.from({ length: this.wordLength }, () => {
                        return 'X'
                    })
                })
            }
        }
    })
})
