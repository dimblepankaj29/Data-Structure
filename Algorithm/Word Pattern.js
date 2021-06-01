// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

var wordPattern = function(pattern, str) {
    let words = str.split(' ')
    
     if (words.length !== pattern.length ) return false;
      let mapped = new Set()
      let hash = {}
      for (let i =0; i< pattern.length; i++){
          let current = pattern[i]
          let currWord = words[i]
          if(!hash[current] && !mapped.has(currWord)){
              hash[current] = currWord
              mapped.add(currWord)
          }
          else if (hash[current] !== currWord){
              return false
          }
      }
      return