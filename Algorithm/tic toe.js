/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.count = {
        row: new Array(n).fill(0).map(_ => [0,0]),
        col: new Array(n).fill(0).map(_ => [0,0]),
        diagonal: [[0,0],[0,0]]   
    }
    this.target = n    
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    const rowCount = this.count.row[row]
    rowCount[player - 1] +=1 
    if(rowCount[player -1] === this.target) return player

    const colCount = this.count.col[col]
    colCount[player - 1] +=1
    if(colCount[player -1] === this.target) return player

    if(row  === col ){
        const diagonal = this.count.diagonal[0]
        diagonal[player - 1] +=1
        if(diagonal[player -1] === this.target) return player
    }

    if(row + col === this.target-1){
        const diagonal = this.count.diagonal[1]
        diagonal[player - 1] +=1
        if(diagonal[player -1] === this.target) return player
    }
    return 0
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */