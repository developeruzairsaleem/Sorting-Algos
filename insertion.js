const insertionSort=(arr)=>{


    
    for( let i = 0; i<arr.length; i++ ){
        const selectedItem=arr[i];
        for(let j = i-1; j >= 0; j--){
            // debugger;
            if(selectedItem < arr[j] ){
                arr[j+1] = arr[j]
                if(j===0){
                    arr[j]=selectedItem
                }
            }

            
            else {
                arr[j+1] = selectedItem
                break;
            }
        }



    }

return arr

}


console.log(insertionSort([5,1,2,8,0,3,4,6,7,11,9,2]))