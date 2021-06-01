/**
 * implementation is bases on death first search algorithum
 * @param {} grid 
 */

function numIslands(grid) {
    const H = grid.length;
    const W = grid[0].length;
    let count = 0;
    
    for (let r = 0; r < H; r++) {
      for (let c = 0; c < W; c++) {
        if (grid[r][c] === '0' || grid[r][c] === '2' ) continue;
        count++;
        dfs(r, c);     
      }
    }
    return count;
    
    function dfs(r, c) {
      if (r < 0 || c < 0 || r === H || c === W) return;
      if (grid[r][c] === '0' || grid[r][c] === '2') return; // convert adjacent land to '2' to ingore next time
      grid[r][c] = '2';
      dfs(r-1, c);
      dfs(r+1, c);
      dfs(r, c-1);
      dfs(r, c+1);
    }
  }