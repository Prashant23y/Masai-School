function reversedU(matrix, n){
    let ans = [];

    for(i = n - 1; i >= 0; i--){  // for first column
        ans.push(matrix[i][0]);
    }

    for(j = 1; j < n; j++){
        ans.push(matrix[0][j]);
    }

    for(i = 1; i < n; i++){
        ans.push(matrix[i][n - 1]);
    }
    ans.push(matrix[n - 1][n - 2]);
    console.log(ans.join(" "));
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = matrix.length;
reversedU(matrix, n);