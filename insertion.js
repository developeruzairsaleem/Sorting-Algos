const insertionSort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        const selectedItem=arr[i];
        let j=i-1;

        while(j>=0 && arr[j]>selectedItem){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = selectedItem


        
    }
    return arr

}
console.log(insertionSort([5,1,9,0,1,6,7,3,4]))