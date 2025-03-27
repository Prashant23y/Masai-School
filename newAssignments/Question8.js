function personInfo(){
    console.log("Name : "+ this.name + ", Age : "+ this.age);
}

let person = {
    name : "Prashant Kumar",
    age : 22
}

personInfo.call(person)