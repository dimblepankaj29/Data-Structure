// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // const vowels = ['a', 'e', 'i', 'o', 'u']
    // let vCnt = 0
    // // str1 = str.split('')
    // for (let char of str.toLowerCase()){
    //     if(vowels.indexOf(char)> -1){
    //         vCnt++
    //     }
    // }
    // return vCnt

    let matches = str.match(/[aeiou]/gi)
    return matches? matches.length:0
}

module.exports = vowels;
