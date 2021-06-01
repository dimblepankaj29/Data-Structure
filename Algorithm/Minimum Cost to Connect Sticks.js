/**
 * @param {number[]} sticks
 * @return {number}
 * Input: sticks = [2,4,3]
Output: 14
Explanation: You start with sticks = [2,4,3].
1. Combine sticks 2 and 3 for a cost of 2 + 3 = 5. Now you have sticks = [5,4].
2. Combine sticks 5 and 4 for a cost of 5 + 4 = 9. Now you have sticks = [9].
There is only one stick left, so you are done. The total cost is 5 + 9 = 14.

 */
// we need to combine smallest sticks each time
// when we combined the sticks we add it to the combined arr
const connectSticks = sticks => {
    if(sticks.length <= 1) return 0
    // sorting at the beginning
    sticks.sort((a,b)=>a-b)
    const combined = []
    let res = 0
    while(sticks.length || combined.length > 1){
        let curSum = 0
        // we need to sticks to combine => counter is 2
        let counter = 2
        while(counter--){
            console.log(counter)
            // if we have original stick and it is less than first combined -> take original
            const condition = sticks.length && (!combined.length || (sticks[0] < combined[0]))
            console.log("condition",condition)
            // add to curSum and remove first from either combined or original sticks array
            curSum += condition ? sticks.shift() : combined.shift()
            console.log("curSum", curSum)
        }
        // add to result and add the stick that we combined to combined array
        res += curSum
        
        combined.push(curSum)
        console.log(combined)
    }
     console.log("combined",combined)
    return res
}

const connectSticks1 = sticks => {
    if(sticks.length <= 1) return 0
    // sorting at the beginning
    sticks.sort((a,b)=>a-b)
    // for (let i =0; i <sticks.length-1; i++){
        // console.log(sticks)
        
    // }
    let preSum= 0;
    let sum =0 
    while (sticks.length > 1){
        preSum = sum
         sum = sticks[0] + sticks[1] 
        console.log(sticks)
        sticks.splice(0,2, sum)
        if(sticks.length === 1)
        sticks[0] = sticks[0] + preSum
    }

    return sticks
}

console.log(connectSticks1([1,8,3,5]
    ))