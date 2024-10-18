



// bubble sort
const bubbleSort=(arr)=>{

    //  first loop through the array 
    //  on each loop we will have to come down by one, for the number of items
    //  we have to loop
    //  inside each inner loop we will have to compare the two numbers side by side and 
    //  and then push the largest number to the end of the array
    // and then continue the process untill every thing is finished

    for(let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
             
            }
        }
    }
    return arr



}

const result = bubbleSort([111,1,2,5,1,3,12,44,75,84])
console.log(result)