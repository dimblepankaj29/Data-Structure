/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {

    // after 7 days first day pattern get repeat 
   if(N % 7 == 0)
   {
       N = 7
   }
   else{
       N = N % 7
   }
   for (var i = 0 ; i < N ; i++){
       let cell =  []
       cell[0] = cell[cells.length-1] = 0
    //    console.log(cell[cells.length-1])
       for (var j = 1; j < cells.length -1; j ++){
           if(cells[j-1] ==  cells[j+1]){
               cell[j] =1
           }
           else{
               cell[j] =0
           }
       }
       cells = cell
   }
   return cells
}

prisonAfterNDays([0,1,1,0,0,0,0,0], 7)

// [0 ==>0,1,1,0,0,0,0,0
//     1 ==>0,0,0,0,1,1,1,0
//     2 ==>0,1,1,0,0,1,0,0
//     3 ==>0,0,0,0,0,1,0,0
//     4 ==>0,1,1,1,0,1,0,0
//     5 ==>0,0,1,0,1,1,0,0
//     6 ==>0,0,1,1,0,0,0,0
//     7 ==>0,0,0,0,0,1,1,0
//     8 ==>0,1,1,1,0,0,0,0
//     9 ==>0,0,1,0,0,1,1,0
//     10 ==>0,0,1,0,0,0,0,0
//     11 ==>0,0,1,0,1,1,1,0
//     12 ==>0,0,1,1,0,1,0,0
//     13 ==>0,0,0,0,1,1,0,0
//     14 ==>0,1,1,0,0,0,0,0
    