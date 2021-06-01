// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Solution 1
    // let length = str.length-1
    // let reverseString = ''
    // while (length > -1){
    //     reverseString = reverseString + str[length]
    //     length--
    // }
    // return reverseString

    // reduce  2 
    //return str.split('').reduce((rev, char) => char +rev  )

    // for loop
    let reserved = ""
    for( let char of str){
        reserved = char + reserved
    }
    return reserved
}

module.exports = reverse;
