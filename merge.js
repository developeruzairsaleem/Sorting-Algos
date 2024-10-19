const numbers = [99,44,6,2,1,5,63,87,283,4,0]
function mergeSort(arr){

if(arr.length===1){
    return arr
}

// split the  array in half
const halfIndex=Math.floor(arr.length/2)
const left  =arr.slice(0,halfIndex) ;
const right = arr.slice(halfIndex,arr.length);
return merge(
    mergeSort(left),// this shall return the left half sorted array
    mergeSort(right)// and this shall return the right half sorted array
)

}

// this function will compare the left half sorted array with the right half sorted array
function merge(left,right){
    //  compare each element of left from left to right with the right from left to right
    //  [2,7] [1,4]
    const newArray=[];
    let leftIndex=0;
    let rightIndex=0;

    while((leftIndex<left.length) || (rightIndex<right.length)){
        if(leftIndex===left.length){
            newArray[newArray.length]=right[rightIndex]
            rightIndex++
        }else if(rightIndex===right.length){
            newArray[newArray.length] = left[leftIndex]
            leftIndex++
        }
        else{

            if(left[leftIndex] <= right[rightIndex]){
                newArray[newArray.length] = left[leftIndex];
                leftIndex++;
            }
            else {
                newArray[newArray.length] = right[rightIndex]
                rightIndex++
            }

        }
        
        
    }
       
    return newArray;
}



const answers =mergeSort(numbers);
console.log(answers);