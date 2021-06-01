function numIsLand(grid){
    const H = grid.length
    const W = grid[0].length
    let count =0
    for (var r =0; r < H; r++){
        for (var c = 0; c < W ; c++){
            if(grid [r][c] =="0" || grid [r][c] === '2') continue
            count++
            dfs(r, c)
        }
    }
return count
    function dfs(r,c){
        if(r < 0 || c < 0 || r === h || c === W) return
        if(grid [r][c] === '0' || grid [r][c] === '2') continue 
        grid[r][c] = "2"
        dfs(r+1, c)
        dfs(r-1,c)
        dfs(r, c+1)
        dfs(r, c-1)
    }
}