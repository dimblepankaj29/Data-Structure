/**
 * @param {string[]} words
 * @return {string[]}
 * Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
 * 
 */
const findAllConcatenatedWordsInADict = words => words.filter( dfs( new Set( words ) ) )

const dfs = dict => word => {  
    for ( let i = 1; i < word.length; i++ ) {
        if ( dict.has(word.slice( 0, i ) ) ) {
            let suffix = word.slice( i )
             console.log(word + " = " + suffix)   
            if ( dict.has( suffix ) || dfs( dict )( suffix ) ) {
                console.log( " Match = " +word + " = " + suffix)   
                return true
            }
        }
    }
}

console.log(findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]))