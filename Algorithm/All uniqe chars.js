function allUniqueChars (words) {
    let uniqueChar = new Set()

    for (var i =0; i< words.length; i++){

        uniqueChar.add(words[i])
    }
    console.log(uniqueChar)
    return uniqueChar
}

console.log(allUniqueChars("I am Pankaj"))

var allUniqueChars = function(string) {
  
    // O(n^2) approach, no additional data structures used
    // for each character, check remaining characters for duplicates
    for (var i = 0; i < string.length; i++) {
      for (var j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false; // if match, return false
        }
      }
    }
    return true; // if no match, return true
  };

  allUniqueChars("Pankaj")