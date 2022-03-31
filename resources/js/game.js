import Tile from "./Tile"
import words from "./words"

export default {
    theWord: 'cat',
    guessesAllowed: 4,
    currentRowIndex: 0,
    state: 'active', // active, complete
    errors: false,
    message: '',

    letters: [
        "QWERTYUIOP".split(""),
        "ASDFGHJKL".split(""),
        ['Enter', ..."ZXCVBNM".split(""), 'Backspace']
    ],

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
            return Array.from({ length: this.theWord.length }, (item, index) => new Tile(index))
        })
    },

    onKeyPress(key) {
        this.message = ''
        this.errors = false

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key)
        } else if (key === 'Backspace' || key === 'Delete') {
            this.emptyTile()
        } else if (key === 'Enter') {
            this.submitGuess()
        }
    },

    emptyTile() {
        for (let tile of [...this.currentRow].reverse()) { // copy to a new brand array
            if (tile.letter) {
                tile.empty()

                break;
            }
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

        if (!words.includes(this.currentGuess.toUpperCase())) {
            this.errors = true

            return this.message = 'Invalid word.'
        }

        Tile.updateStatusesForRow(this.currentRow, this.theWord)

        if (this.currentGuess === this.theWord) {
            this.state = 'complete'

            return this.message = 'You win!'
        }

        if (this.remainingGuesses === 0) {
            this.state = 'complete'

            return this.message = 'Game over. You lose.'
        }

        this.currentRowIndex++

        return this.message = 'Incorrect.'
    }
}
