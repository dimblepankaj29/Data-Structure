// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charCount = new Map()
    for (let char of str){
        count = charCount.get(char)||0
        charCount.set(char,  ++count) 
    }
    const ret = [...charCount].sort((a,b)=> b[1] - a[1])
    return ret[0][0]
    
    
    // solution 2
    // let maxcharcount = 0
    // let maxChar ='' 
    // let charCount = {}
    // for (let char of str){
    //     charCount[char] = charCount[char] + 1 || 1
    // }
    // for (let char in charCount){
    //     if(maxcharcount < charCount[char]){
    //         maxcharcount =charCount[char]
    //         maxChar = char
    //     }
    // }
    // return maxChar
}

module.exports = maxChar;
