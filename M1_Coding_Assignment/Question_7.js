function findMajorityElement(arr){
    let counts = {};
    let majorityCount = Math.floor(arr.length / 2);

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        counts[num] = (counts[num] || 0) + 1;

        if(counts[num] > majorityCount){
            return num;
        }
    }
    return null;
}

console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3]));
console.log(findMajorityElement([1, 2, 3, 4, 5, 6]));
console.log(findMajorityElement([7, 7, 7, 7, 2, 2, 7, 7]));

