/**
 Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
 */
// var mostCommonWord = function(paragraph, banned) {
//     let words = paragraph.split(" ")
    
//     let acc = new Map()
//     const map = words.map(( word) => {
//         word = word.toLowerCase().replace(/[^0-9A-Z]+/gi,"")
//       let count = acc.get(word) || 0
//         if(banned.indexOf(word) === -1){
//             acc.set(word, ++count) 
//             return acc
//         }
//     })
//     // console.log(map)
//     const ret = [...map].sort((a,b) => b[1] - a[1] )
//     console.log(ret)
//     return ret[0][0]
// };

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/[^a-zA-Z0-9 ]+/gi, " ")
    let words = paragraph.split(" ")
    let acc = new Map()
    words.map(( word) => {
        if(word === '') return
        cleanWord = word.toLowerCase().replace(/[^0-9A-Z]+/gi,"")
      let count = acc.get(cleanWord) || 0
        if(banned.indexOf(cleanWord) === -1){
            acc.set(cleanWord, ++count) 
        }
    })
    const ret = [...acc].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    console.log(ret[0][0])
    return ret[0][0]
};


mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",
["hit"])

// mostCommonWord("Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.",
// ["banned", "a"])

// "a, a, a, a, b,b,b,c, c"
// ["a"]