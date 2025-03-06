

let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (i = 0; i < arr.length; i++) {
    let temp = "";
    for (let j = 0; j < arr[i].length; j++) {
        let temp1 = 0;
        temp1 += i + j;
        temp += temp1 + " ";
    }
    console.log(temp);
}