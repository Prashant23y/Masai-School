function firstUniqueChar(str){
   let frequency = {};
   for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(frequency[char]){
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
   }

   console.log(frequency);

   for(let i = 0; i < str.length; i++){
    if(frequency[str[i]] === 1){
        return str[i];
    }
   }

   return null;
}

console.log(firstUniqueChar("aabbccdeeff"))

