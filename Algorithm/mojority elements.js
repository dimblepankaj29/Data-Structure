// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let elements = new Map()
    if(nums.length ===0) return 0
    for (let i =0; i < nums.length; i++){
        let cnt = elements.get(nums[i]) || 0
        elements.set(nums[i], ++cnt)
    }
    
    let res = [...elements].sort((a, b)=> b[1]-a[1])
    return res[0][0]
    
};