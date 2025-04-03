function createEmployee(name, role, salary){
    return {
        name : name,
        role : role,
        salary : salary,
        introduce : function() {
            console.log("Hello, I am "+name+ ", working as a " + role + ".")
        }

    }
}

let emp1 = createEmployee("Alice", "Developer");

emp1.introduce();