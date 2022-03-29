class Tile {
    letter = ''
    status = '' // correct, present, absent

    fill(key) {
        this.letter = key.toLowerCase()
    }

    empty() {
        this.letter = ''
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => {
        return {
            guessesAllowed: 4,
            wordLength: 3,
            currentRowIndex: 0,

            init() {
                this.board = Array.from({ length: this.guessesAllowed }, () => {
                    return Array.from({ length: this.wordLength }, () => new Tile)
                })
            },

            onKeyPress(key) {
                // validate: only letter
                if (/^[A-z]$/.test(key)) {
                    this.fillTile(key)
                }
            },

            fillTile(key) {
                for (let tile of this.currentRow()) {
                    if (!tile.letter) {
                        tile.fill(key)

                        break;
                    }
                }
            },

            currentRow() {
                return this.board[this.currentRowIndex]
            }
        }
    })
})
