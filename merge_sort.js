
function mergeTwoSortedArrays(arr1,arr2){
    let m = arr1.length;
    let n = arr2.length;
    let ans = new Array(m+n);
    let left = 0;
    let right = 0;
    let index = 0;

    while(left<m && right<n){
        if(arr1[left]<arr2[right]){
            ans[index] = arr1[left];
            left++;
            index++;
        }else{
            ans[index] = arr2[right];
            right++;
            index++;
        }
    }

    while(left<m){
        ans[index] = arr1[left];
        left++;
        index++;
    }

    while(right<n){
        ans[index] = arr2[right];
        right++;
        index++;
    }

    return ans;
}
function mergesort(arr){

let n = arr.length;
if(n == 1){
return arr;
}
const middleIndex = Math.ceil(n / 2); // Find the middle index
  const left = arr.slice(0, middleIndex);   // Get the first half of the array
  const right = arr.slice(middleIndex);     // Get the second half of the array

  const sorted_left = mergesort(left);
  const sorted_right = mergesort(right);

  return mergeTwoSortedArrays(sorted_left,sorted_right);
}


let arr = [3,4,2,0,1,9,5];
let sortedArr = mergesort(arr);
console.log(sortedArr);