// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    if(stringA.length !==  stringB.length){
        return false
    }

     //solution 1

    let charMapA = buildCharMap (stringA)
    let charMapB = buildCharMap (stringB)
    for (let char in charMapA){
        if(charMapA[char] !== charMapB[char]) {
            return false
        }
    }
    return true

    //solution 2

    // let stringAmap = new Map()
    // let stringBmap = new Map()
    // for (let char of stringA){
    //     let count = stringAmap.get(char.toLowerCase())|| 0
    //     stringAmap.set(char.toLowerCase(), ++count)
    // }
    // for (let char of stringB){
    //     let count = stringBmap.get(char.toLowerCase())|| 0
    //     stringBmap.set(char.toLowerCase(), ++count)
    // }
    // let sortA = [...stringAmap].sort((a,b) => a[0].localeCompare(b[0]))
    // let sortb = [...stringBmap].sort((a,b) => a[0].localeCompare(b[0]))
    // return JSON.stringify (sortA) === JSON.stringify(sortb)

}

function buildCharMap (str) {
    let charMap = {}
    for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}
// anagrams("hello", "Llohe")
module.exports = anagrams;
