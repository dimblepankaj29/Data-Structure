// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair ='') {
    // for (let i = 0; i < n; i++){
    //     let consoleStr = Array(n).fill(' ')
    //     for (let j = 0 ; j <= i; j++){
    //         consoleStr[j] = '#'
    //     }
    //     console.log(consoleStr.join(''))      
    // }


    // for (let r = 0; r < n; r++){
    //     let stair =''
    //     for (let c = 0; c < n; c++){ 
    //         if (c <= r){
    //             stair = stair + "#"
    //         }else
    //         {
    //             stair = stair + " "
    //         }
    //     }
    //     console.log(stair)
    // }

    if(n===row) {
        return
    }
    if(n === stair.length){
        console.log(stair)
        return steps(n, row + 1)
    }

    let char =stair.length <= row?
     '#': ' '
    steps(n, row, stair+ char)

}
// steps (3)
module.exports = steps;
