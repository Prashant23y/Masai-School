function canFormPalindrome(str){
    let charCount = {};
    let oddCount = 0;
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(charCount[char] === undefined){
            charCount[char] = 1;
        } else{
            charCount[char]++;
        }
    }

    for(let value in charCount){
        if(charCount[value] % 2 !== 0){
            oddCount++;
        }
        if(oddCount > 1){
            return false;
        }
    }
    return true;
}

console.log(canFormPalindrome("civic"));
console.log(canFormPalindrome("ivicc"));
console.log(canFormPalindrome("hello"));