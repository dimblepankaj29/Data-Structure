
'use strict'

// function binarySearch(array, number, left, right){
//        if(left > right)
//        console.log("Not Found : ", number)

//        let mid = Math.floor( left + ((right - left) / 2))
//        if( array[mid] ==  number){
//          console.log("Found : ", number)
//        }
//        else if (array[mid] > number) {
//             binarySearch(array, number, 0, mid-1)
//        } else if (array[mid] < number) {
//         binarySearch(array, number, mid + 1, array.length -1 )
//       } 
      
// }

// binarySearch([1,2,5,7,9,11,56, 234,342], 26, 0, 8)

function binary_Search(items, value){
    let firstIndex  = 0;
    let lastIndex   = items.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

    return (items[middleIndex] != value) ? -1 : middleIndex;
}
const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));


function binary_Search(items, value){
  
    let lastIndex = items.length -1
    let startIndex = 0
    let midIndex = Math.floor (lastIndex + startIndex/ 2)
    while(startIndex < lastIndex && items[midIndex]!=value){

         if(items[midIndex]> value) 
          lastIndex = midIndex - 1 
         else if(items[midIndex] < value) 
          startIndex = midIndex  + 1
          midIndex = Math.floor (lastIndex + startIndex / 2)
    }
    return midIndex
}

const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 7));   
console.log(binary_Search(items, 5));

