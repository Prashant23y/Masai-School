function multiplyNumbers(num1, num2){
    let ans = {
        multiply : function(n1, n2){
            return n1 * n2;
        }
    }
    console.log(ans.multiply.apply(null , [num1, num2]));
}

multiplyNumbers(5 , 5);