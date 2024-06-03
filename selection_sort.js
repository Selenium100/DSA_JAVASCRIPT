function selectionsort(arr){
let n = arr.length;
for(let i=0;i<n-1;i++){
    let min_index = i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min_index]){
            min_index = j;
        }
    }
    let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
}

return arr;
}

let arr = [3,6,1,2,8,5];
let sortedArr = selectionsort(arr);
console.log(sortedArr);