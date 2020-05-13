function countUniqueValues(arr) {
    let counter = 0;
    let left = 0;
    let right = 1;

    while (right <= arr.length) {
        if (arr[left] === arr[right]) {
            right ++;
        } else if (arr[left] !== arr[right]) {
            counter ++;
            left = right;
            right++;
        }    
    }
    return counter;
}

// countUniqueValues([])                                                         
countUniqueValues([-1,-1,1,1,1,1,2,2,3,3,3,3,3,3,3,4,5,6,7,8,8,8,8,8,8])
                                                                     

             