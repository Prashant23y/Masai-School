function filterEvenNumbers(arr){
    let ans = arr.filter(ele => ele % 2 == 0);
    return ans;
}

function sumOfArray(arr){
    let sum = arr.reduce(
        (acc, curValue) => acc + curValue , 0
    );
    return sum;
}

function sortAndConcat(arr1, arr2){
    arr1.sort((a , b) => a - b);
        console.log(arr1);
    arr2.sort((a , b) => a - b);
        console.log(arr2);
    let newArr = arr1.concat(arr2);

    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(arr));
console.log(sumOfArray(arr))

let arr1 = [2, 4, 1, 7, 1, 100]
let arr2 = [10, 8, 4, 210, 3]
console.log(sortAndConcat(arr1, arr2))