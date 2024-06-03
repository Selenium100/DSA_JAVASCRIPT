function insertionsort(arr){
let n = arr.length;
for(let i=1;i<n;i++){
let curr_ele = arr[i];
let j = i-1;

while(j>=0 && arr[j]>curr_ele){
    arr[j+1] = arr[j];
    j--;
}
arr[j+1] = curr_ele;
}

return arr;
}

let arr = [3,6,1,8,0,2];
let sortedArr = insertionsort(arr);
console.log(sortedArr);