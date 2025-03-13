function findMissingNumber(arr, N){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let sumOfN = (N * (N + 1)) / 2;
    let result = sumOfN - sum;
    
    console.log(result);
}

findMissingNumber([1, 2, 4, 5], 5);

findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)
