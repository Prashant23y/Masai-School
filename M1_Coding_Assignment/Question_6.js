function longestCommonPrefix(arr){
    if(arr.length === 0){
        return "";
    }

    let prefix = "";
    for(let i = 0; i < arr[0].length; i++){
        let char = arr[0][i];

        for(let j = 1; j < arr.length; j++){
            if(i >= arr[j].length || arr[j][i] !== char){
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));


