document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => {
        return {
            guessesAllowed: 4,
            wordLength: 3,
            currentRowIndex: 0,
            currentTileIndex: 0,

            init() {
                this.board = Array.from({ length: this.guessesAllowed }, () => {
                    return Array.from({ length: this.wordLength }, () => '')
                })
            },

            onKeyPress(key) {
                this.board[this.currentRowIndex][this.currentTileIndex] = key

                if (this.currentTileIndex === this.wordLength - 1) {
                    this.currentRowIndex++
                    this.currentTileIndex = 0
                } else {
                    this.currentTileIndex++
                }
            }
        }
    })
})
