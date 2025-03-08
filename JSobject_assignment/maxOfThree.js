function maxOfThree(num1, num2, num3){
    let max = (num1 > num2) ?
        ((num1 > num3) ? num1 : num3) :
        ((num2 > num3) ? num2 : num3);

    return max;
}

console.log(maxOfThree(45, 78, 33));