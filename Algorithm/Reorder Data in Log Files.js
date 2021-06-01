/**
 * @param {string[]} logs
 * @return {string[]}
 */
/**
 * 
 * @param {*} logs 
 * reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])

["t kvr", "r 3 1", "i 403", "7 so", "t 54"]
 */

 /**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
   
   const compare = (a, b) => {
       const n = body(a).localeCompare(body(b));
       if (n !== 0) return n;
       return a.localeCompare(b);
   };
   
   let sortedLetterLogs = []
   let sortedDigitLogs = []
   if (logs == null)
       return null
   for (var i =0; i< logs.length; i++ ){
       splitLog = logs[i].split(" ")
       if (checkForDigit(splitLog))
           sortedDigitLogs.push(logs[i])
       else
           sortedLetterLogs.push(logs[i])
   }
   sortedLetterLogs.sort(compare)
   sortedLetterLogs.push(...sortedDigitLogs)
   return sortedLetterLogs
};

var checkForDigit = function (log){
    for (var i =1; i< log.length; i++ ){ // ingore first letter 
        if(!isNaN(log[i]) ) // if not number then return true 
       return true
    }
    return false
  }



