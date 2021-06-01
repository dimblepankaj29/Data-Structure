/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function(s) {
//     let numStr = ""
//     s = s.trim()
//     if(!s[0].match(/[0-9-+]/g)) return 0
//     if (parseInt(s) > Math.pow(2, 31)) {
//         numStr = "" + (Math.pow(2,31) - 1).toString()
//     }
//     else if (parseInt(s) < Math.pow(-2, 31) ) 
//          numStr = "" + Math.pow(-2,31)
//     else if(parseInt(s) < Math.pow(2, 31) || ( parseInt(s) > Math.pow(-2, 31) && parseInt(numStr)  <0) )
//         numStr = "" + parseInt(s)
//     else{
//         for (i=0; i < s.length; i++){     
//              if (!isNaN(s[i]) || s[i] === "-")
//                 numStr = numStr + s[i]  
//         }
//     }
//      return numStr.length > 0 ?  parseInt(numStr):0
// };

// var myAtoi = function(s) {
//     let numStr = ""
//     s = s.trim()
//     if((s.indexOf('+') > 0 && s.indexOf('-') > 0) || (s.indexOf('+') - s.indexOf('-') == 1) || (s.indexOf('-') - s.indexOf('+') == 1)  || s == "" || !s[0].match(/[0-9-+]/g) ) return 0
//     if (parseInt(s) >= Math.pow(2, 31)) {
//         numStr = "" + (Math.pow(2,31) - 1).toString()
//     }
//     else if (parseInt(s) < Math.pow(-2, 31) ) 
//          numStr = "" + Math.pow(-2,31)
//     else if(parseInt(s) < Math.pow(2, 31) || ( parseInt(s) > Math.pow(-2, 31) && parseInt(numStr)  <0) )
//         numStr = "" + parseInt(s)
//     else{
//         for (i=0; i < s.length; i++){     
//              if (!isNaN(s[i]) || s[i] === "-")
//                 numStr = numStr + s[i]  
//         }
//     }
//      return numStr.length >= 0 && parseInt(numStr)?  parseInt(numStr):0
// };
var myAtoi = function(str) {
    str=str.trim();
     if(!str)return 0;
 var sign=1;
 var i=0, answer=0;
 if(str[i]=='+'){
     sign=1;
     i++;
 }
 else if(str[i]=='-'){sign=-1;i++;}
 
 for(;i<str.length;i++)
 {
     var temp=str.charCodeAt(i)-48;
     if(temp>9 || temp<0)break;
     if(answer>2147483647/10|| answer>(2147483647-temp)/10)return sign==1?2147483647: -2147483648;
     else answer=answer*10 + temp;
 }
 return answer* sign;
 };