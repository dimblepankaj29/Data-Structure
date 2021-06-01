
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// string S consisting of N characters is called properly nested if:

// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, string "(()(())())" is properly nested but string "())" isn't.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

// For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let charArray = []
//      for (let c of S) {
//          if(c === '(')
//           charArray.push(c)
//           else{
//             if (charArray.length ===0 ) return 0
//               charArray.pop()
//           }
//      }
//      return charArray.length ===0 ?1:0
// }


function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
      case "aeiou".includes(s[0]):
        letter = "A"
        break;
      case "bcdfg".includes(s[0]):
          letter = "B";
          break;
      case "hijkl".includes(s[0]):
          letter = "C";
          break;
      case "npqrstvwxyz".includes(s[0]):
       letter = 'D'      ;  
       break;
      
  }
  return letter;
}

console.log(getLetter("adfgt"))