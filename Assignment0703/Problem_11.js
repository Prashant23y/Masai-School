let num = 971;
let rn = "";
let digit;
while(num>0){
    digit = num%10;
  num = Math.floor(num/10)
rn += digit;
}
console.log(rn);