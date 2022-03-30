import Tile from "./Tile";

export default {
    theWord: 'cat',
    guessesAllowed: 4,
    currentRowIndex: 0,
    state: 'active', // active, complete
    message: '',

    get currentRow() {
        return this.board[this.currentRowIndex]
    },

    get currentGuess() {
        return this.currentRow.map(tile => tile.letter).join('')
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1
    },

    init() {
        this.board = Array.from({ length: this.guessesAllowed }, () => {
            return Array.from({ length: this.theWord.length }, () => new Tile)
        })
    },

    onKeyPress(key) {
        this.message = ''

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key)
        } else if (key === 'Enter') {
            this.submitGuess()
        }
    },

    fillTile(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key)

                break;
            }
        }
    },

    submitGuess() {
        if (this.currentGuess.length < this.theWord.length) {
            return
        }

        for (let tile of this.currentRow) {
            tile.updateStatus(this.currentGuess, this.theWord)
        }

        if (this.currentGuess === this.theWord) {
            this.state = 'complete'

            return this.message = 'You win!'
        }

        if (this.remainingGuesses === 0) {
            this.state = 'complete'

            return this.message = 'Game over. You lose.'
        }

        this.currentRowIndex++

        return this.message = 'Incorrect'
    }
}
