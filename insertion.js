const insertionSort=(arr)=>{
    for( let i = 0; i<arr.length; i++ ){
        const selectedItem=arr[i];

        let currentComparingIndex= i-1;
        while(currentComparingIndex>=0 && selectedItem < arr[currentComparingIndex] ){
            arr[currentComparingIndexgit +1] = arr[currentComparingIndex]
            currentComparingIndex--
        }
        arr[currentComparingIndex+1]= selectedItem

    }
return arr
}
// [1,2,3,4],2
//  i =0




























console.log(insertionSort([5,1,2,8,0,3,4,6,7,11,9,2]))
// Test Case 1: Array with all identical elements
console.log(insertionSort([1, 1, 1, 1, 1])); 
// Expected Output: [1, 1, 1, 1, 1]

// Test Case 2: Array already sorted
console.log(insertionSort([1, 2, 3, 4, 5])); 
// Expected Output: [1, 2, 3, 4, 5]

// Test Case 3: Array sorted in reverse order
console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); 
// Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Test Case 4: Array with negative and positive numbers
console.log(insertionSort([3, -1, 0, 5, -10, 8, 1])); 
// Expected Output: [-10, -1, 0, 1, 3, 5, 8]

// Test Case 5: Array with duplicates
console.log(insertionSort([2, 5, 3, 2, 8, 5, 3])); 
// Expected Output: [2, 2, 3, 3, 5, 5, 8]

// Test Case 6: Array with only one element
console.log(insertionSort([10])); 
// Expected Output: [10]

// Test Case 7: Empty array
console.log(insertionSort([])); 
// Expected Output: []

// Test Case 8: Large array with random values
console.log(insertionSort([9, 4, 3, 1, 7, 8, 6, 2, 5, 0])); 
// Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
