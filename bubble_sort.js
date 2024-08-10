function bubblesort(arr){ //good
let n = arr.length;

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]>arr[j]){
            let temp = arr[j]; //added comment in master
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
return arr;
}

let arr = [5,2,3,8,1,0];
let sortedArr = bubblesort(arr);
console.log(sortedArr);
