let grid = document.querySelector('#game')

let guessesAllowed = 8
let wordLength = 5

let fragment = document.createDocumentFragment()

let generateGrid = () => {
    Array.from({ length: guessesAllowed }).forEach(() => {
        let row = document.createElement('div')
        row.classList.add('row')

        Array.from({ length: wordLength }).forEach(() => {
            let tile = document.createElement('div')
            tile.classList.add('tile')

            row.appendChild(tile)
        })

        fragment.appendChild(row)
    })

    grid.appendChild(fragment)
}

generateGrid()
