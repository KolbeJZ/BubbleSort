// let BinarySearch = (list,val)=>{
//     let left = 0;
//     let right = list.length - 1;
//     let mid = Math.floor((left + right) / 2);

//     while (list[mid] !== val && left <= right) {
//         if (val < list[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//         mid = Math.floor((left + right) / 2);
//     }
//     if (list[mid] === val) {
//         return mid;
//     } else {
//         return -1
//     }

// }
// ;

// let list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
// let val = 20;
// // should return 9

// function linearSearch(arr, key){
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] === key){
//           return i
//       }
//   }
//   return -1
// }
// BinarySearch(list, val);
const findIndex = (list, target) => {
    //Return the result of recursive search
    return binarySearch(list, target, 0, list.length - 1);
    
  };
  
  const binarySearch = (list, target, startIndex, endIndex) => {
    //Define base case
    if (startIndex > endIndex) { return -1; } 
    //Define reference to middleIndex && currentMiddle value as we recursively search for the target
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    let currentMiddle = list[middleIndex];
  
    if (currentMiddle > target) { return binarySearch(list, target, startIndex, middleIndex - 1); }
    if (currentMiddle < target) { return binarySearch(list, target, middleIndex + 1, endIndex); }
    
    return middleIndex;
  }
  