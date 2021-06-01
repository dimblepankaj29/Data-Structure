/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitWords = s.trim().split(' ')
    let reverseWords=""
    let wordsLength = splitWords.length
    for (i = wordsLength -1 ; i>= 0; i--){
        if(splitWords[i] != "")
        reverseWords = reverseWords +   splitWords[i] + " "
    }
    reverseWords = reverseWords.substring(0, reverseWords.length-1)
    return reverseWords
};