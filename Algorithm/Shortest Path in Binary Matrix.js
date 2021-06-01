/**
 * 
 * In an N by N square grid, each cell is either empty (0) or blocked (1).

A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:

Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
C_1 is at location (0, 0) (ie. has value grid[0][0])
C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.
 * Input: [[0,0,0],[1,1,0],[1,1,0]]
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length
    if(grid[0][0] || grid[n-1][n-1]) return -1
    const queue = []
    const dist = 0
    queue.push([0, 0, dist+1])
    const directions = [[-1,-1],[-1,0],[-1,1],
                        [0,-1],[0,1],
                        [1,-1],[1,0],[1,1]]
        for(const [i, j, d] of queue){
            if(i === n-1 && j === n-1) { 
                console.log(grid)
                return d}
            for(const [r, c] of directions){
                const newR = i + r
                const newC = j + c
                 if(0 <= newR && newR < n && 0 <= newC && newC < n && !grid[newR][newC]){
                     queue.push([newR, newC, d+1])
                     grid[newR][newC] = 1
                 }
            }
        }
    return -1
};