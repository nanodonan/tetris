/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas01")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 400
const CANVAS_HEIGHT = canvas.height = 600

const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

let tileWSize = CANVAS_WIDTH / board[0].length
let tileHSize = CANVAS_HEIGHT / board.length

class Peca {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    draw() {
        ctx.fillStyle = "green"
        ctx.fillRect(this.x * tileWSize, this.y * tileHSize, tileWSize, tileHSize)
    }

    update() {
        if(this.y > 4 ) return
        this.y += 1

    }
}

class Board {
    draw() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                // ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
                ctx.strokeStyle = "white"
                ctx.strokeRect(j * tileWSize, i * tileHSize, tileWSize, tileHSize)
            }
        }

    }
}

const tabuleiro = new Board()
const peca = new Peca(0, 0)
let x = 0
let frames = 0
let frameRate = 10

function animate() {
    window.requestAnimationFrame(animate)
    //limpa a tela
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    //desenha
    tabuleiro.draw()
    peca.draw()
    //update
    if (frames % frameRate === 0) {
        console.log(Date.now(), x, frames)
        peca.update()
    }

    frames += 1
}
animate()


