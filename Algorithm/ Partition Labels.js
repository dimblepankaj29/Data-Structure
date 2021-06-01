/**
 * @param {string} S
 * @return {number[]}
 * A string S of lowercase English letters is given. We want to partition this string into 
 * as many parts as possible so that each letter appears in at most one part,
 * and return a list of integers representing the size of these parts.

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 */
var partitionLabels = function(S) { 
    let charMap = []; 
     for (var i = 0; i < S.length; i++){
         charMap[S[i]] = i // take maximum index
     }
     console.log(charMap)
     let maxIndex =0
     let endAt =0
     let split = []
     for (var j=0; j < S.length; j++){
         maxIndex = Math.max(maxIndex, charMap[S[j]]) // retrieve max value 
         if(maxIndex === j){
             split.push(j - endAt+1)
             endAt = j+1
         }             
     }
     return split
 };
 partitionLabels("ababcbacadefegdehijhklij")