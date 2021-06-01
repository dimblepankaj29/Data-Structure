////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let charStack = []
    let charArray = S.split('')

    for(let c of charArray){
        if(c === "{" ||c === "(" || c === "[" )
        charStack.push(c)
         else{
                // return 0 if no opening brackets found and 
                // first bracket is a closing bracket
                if(charStack.Count==0) return 0;

                if(c==')'){
                    if(charStack[charStack.length-1]='(') charStack.pop();
                    else return 0;
                }

                if(c=='}'){
                    if(charStack[charStack.length-1]=='{') charStack.pop();
                    else return 0;
                }

                if(c==']'){
                    if(charStack[charStack.length-1]=='[') charStack.pop();
                    else return 0;
                }
            }
    }
    console.log(charStack)
    return charStack.length ===0? 1:0


//     let strStack = []
//     if(s.length < 2 ) return false
//    for (let char of s.split('')){
//        if(char === "{")
//            strStack.push("}")
//        else if (char === "(")
//            strStack.push(")")
//        else if (char === "[")
//            strStack.push("]")
//        else if(strStack.pop() !== char) return false
//    }
//     return strStack.length === 0
}
console.log(solution("{[()()]}"))



function solution(S) {
  
    let strStack = []
    if(S.length < 2 ) return false
   for (let char of S){
       if(char === "{")
           strStack.push("}")
       else if (char === "(")
           strStack.push(")")
       else if (char === "[")
           strStack.push("]")
       else if(strStack.pop() !== char) return false
   }
    return strStack.length === 0
}
console.log(solution("{[()(){}]}"))