"use strict"

const sudokus = require('sudokus');

class Sudoku {
  constructor(board_string) {
    this.initial_value = board_string
    this.board = this.generateBoard()
  }

  generateBoard(){
    let parse = this.initial_value.split('')
    let board = []
    for (let i = 0; i < 9; i++) {
      board[i] = []
      for (let j = 0; j < 9; j++) {
        board[i].push(Number(parse[0]))
        parse.shift()
      }
    }
    return board
  }

solveIt(){
  console.log(`The solution is ....`);
  return sudokus.solve(this.board);
}
}


let fs = require('fs')
// var board_string = fs.readFileSync('set-04_peter-norvig_11-hardest-puzzles.txt')
let board_string = fs.readFileSync('set-03_peter-norvig_95-hard-puzzles.txt')
  .toString()
  .split("\n")[0]

let game = new Sudoku(board_string)
let board = game.generateBoard()
console.log(`Board .`);
console.log(board);
console.log(game.solveIt(board));
