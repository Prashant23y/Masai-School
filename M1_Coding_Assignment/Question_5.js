function secondLargest(arr){
    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];

        if(num > firstMax){
            secondMax = firstMax;
            firstMax = num;
        } else if(num > secondMax && num < firstMax){
            secondMax = num;
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondLargest([10, 20, 30, 40, 50]));
console.log(secondLargest([5, 5, 5, 5]));
console.log(secondLargest([100, 90, 80, 70, 60, 50]));

