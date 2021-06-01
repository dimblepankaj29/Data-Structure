/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 * 
 * Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
 * 
 * 
 */
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let serachprodutsList =[]
    let searchChars = ""
    products = products.sort((a,b) => a.localeCompare(b))
    for (var i =0 ;i< searchWord.length; i++){
        let serachproduts =[]
        searchChars = searchChars + searchWord[i]
            let rgx = new RegExp ('^' + searchChars,'gi')
            console.log(rgx)
            for (var j =0; j < products.length; j++){
                if(products[j].match(rgx) ){
                    serachproduts.push(products[j])
                }
                else {
                    serachproduts.push()
                }
            }
            serachprodutsList.push(serachproduts.slice(0,3))
        
    }
    return serachprodutsList
};

// var suggestedProducts = function(products, searchWord) {
//     products.sort();
//     let res = [];
//     for (let i=0;i<searchWord.length;i++) {
//         products = products.filter((p)=>p[i]==searchWord[i]);
//         res.push(products.slice(0, 3));
//     }
//     return res;
// }