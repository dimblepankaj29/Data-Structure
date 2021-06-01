/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length ===0) return 0;
     var i = 0
     for (var j=0; j < nums.length; j++) 
         {
             if (nums[j]!= nums[i]) // 
                 i++
             nums[i] =nums[j] 
             console.log("i", i + " " + nums[i])
               console.log("j", j + " " + nums[j])
               console.log(nums)
         }
     
     return i + 1
 };

 removeDuplicates(['1','2','3','4','1'])