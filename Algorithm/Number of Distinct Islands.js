/**
 * @param {number[][]} grid
 * @return {number}
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands. An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Example 1:
11000
11000
00011
00011
Given the above grid map, return 1.
Example 2:
11011
10000
00001
11011
Given the above grid map, return 3.

Notice that:
11
1
and
 1
11
 * 
 */
var numDistinctIslands = function(grid) {
    let shape="",
        shapes = new Set();
    
    const makeIslandWater = (row, col, r0, c0) => {
        if(row<0 || col<0 || row>=grid.length || col>=grid[0].length || grid[row][col] == 0){
            return;
        }
        shape += (row-r0) * 3 * grid[0].length + (col-c0)
        grid[row][col] = 0;
        
        makeIslandWater(row+1, col,r0, c0);
        makeIslandWater(row, col+1,r0, c0);
        makeIslandWater(row-1, col,r0, c0);
        makeIslandWater(row, col-1,r0, c0);
    }
    
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col] == 1){
                shape="";
                makeIslandWater(row, col, row, col);
                if(shape.length != 0){
                    shapes.add(shape);
                }
            }
        }
    }
    
    return shapes.size;
};