const selectionSort=(arr)=>{

for(let i=0;i<arr.length;i++){
    let smallest=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[smallest]){
            smallest = j;
        }
    }
    let temp=arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp
}


return arr
}


console.log(selectionSort([2,1,0,12,4,15,6,3,6,7,]))


