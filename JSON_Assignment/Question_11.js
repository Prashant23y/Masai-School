
function extractAndReverse(arr){

    let subArr = arr.slice(2 , 4);
    let n = subArr.length;
    let reversedSubArr = [];

    for(let i = n - 1; i >= 0; i--){
        reversedSubArr.push(subArr[i]);
    }

    return reversedSubArr;

}

let arr = [15, 30, 45, 60, 75, 90];
console.log(extractAndReverse(arr));