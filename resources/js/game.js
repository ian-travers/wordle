import Tile from "./Tile";

export default {
    theWord: 'cat',
    guessesAllowed: 4,
    currentRowIndex: 0,
    state: 'active', // active, complete
    message: '',

    get currentGuess() {
        return this.currentRow.map(tile => tile.letter).join('')
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
        let guess = this.currentGuess

        if (guess.length < this.theWord.length) {
            return
        }

        this.refreshTileStatusForCurrentRow()

        if (guess === this.theWord) {
            this.message = 'You win!'
        } else if (this.guessesAllowed === this.currentRowIndex + 1) {
            this.message = 'Game over. You lose.'
            this.state = 'complete'
        } else {
            this.message = 'Incorrect'
            this.currentRowIndex++
        }
    },

    refreshTileStatusForCurrentRow() {
        // update the tile colors
        this.currentRow.forEach((tile, index) => {
            tile.status = this.theWord.includes(tile.letter) ? 'present' : 'absent';

            if (this.currentGuess[index] === this.theWord[index]) {
                tile.status = 'correct'
            }
        })
    },

    get currentRow() {
        return this.board[this.currentRowIndex]
    }
}
