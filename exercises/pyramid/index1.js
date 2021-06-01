// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       '###'
//       ' # '
//       
//   pyramid(3)
//       '#####'
//       ' ### '
//       '  #  '


//   pyramid(4)
//       '#######'
//       ' ##### '
//       '  ###  '   
//       '   #   '   




function pyramid(n, rows =0, level = '') {

    //**  Solution 1 */
// for (let row = 0; row <=n-1; row++){
//     let rowChars = Array( n * 2 -1).fill(' ')    
//     for (let col = 0; col < rowChars.length ; col++){
//         if( (col >= (n - (row +1) )) && (col < (rowChars.length - (n - (row +1) ))) ) {
//             rowChars[col] = '#'
//         }
//     }
//     console.log(rowChars.join(''))
// }



//**  Solution 2 */

// let midPoint = Math.floor((2*n-1) / 2)
// for (let row =0; row < n ; row ++){
//     let level = ''

//     for (let column = 0; column < 2 * n - 1; column ++){
//         if(midPoint - row <= column && midPoint + row >= column){
//             level += '#'
//         }else{
//             level += ' '
//         }

//     }
//     console.log(level)
// }

//** Solution 2 Recursive solution*/

if (n === rows) {
    return
}
if(2*n-1 === level.length){
    console.log(level)
    return pyramid(n, rows + 1)
}

let midPoint = Math.floor((2*n-1) / 2)
 if(midPoint - rows <= level.length && midPoint + rows >= level.length){
        level += '#'
    }else{
        level += ' '
    }
    return pyramid(n, rows, level)
}
// pyramid(4)

module.exports = pyramid;
