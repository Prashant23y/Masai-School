function outerFunction(){
    let message = "Hello World";
    return function innerFunction(){
        console.log(message);
    }
}

let result = outerFunction();

result();