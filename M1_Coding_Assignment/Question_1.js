function findOutlier(arr){
    let oddCount = 0;
    let evenCount = 0;
    let ans = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddCount++
        } else{
            evenCount++;
        }
    }

    if(evenCount === 1){
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                ans = arr[i];
            }
        }
    } else {
        for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 !== 0){
                ans = arr[i];
            }
        }
    }

}