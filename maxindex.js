function maxindex(arr) {
    if (arr.length === 0) {
      return -1;
    }
    
    let maxNum = arr[0];
    let maxIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
        maxIndex = i;
      }
    }

    return maxIndex;
}
    console.log(maxindex([10, 9, 8, 7, 6 d]));