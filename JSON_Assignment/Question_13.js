function manageStudents(students) {

    function addStudent(name, index) {
        students.splice(index, 0, name);
        console.log(students);
    }

    function checkStudent(name) {
        console.log(students.includes(name));
    }

    function getStudentList() {
        console.log(students.join(", "));
    }

    addStudent("David", 1);
    checkStudent("Eve");
    getStudentList();
    addStudent("Eve", 3);
    checkStudent("John");
    checkStudent("Bob");
    getStudentList();
}

let students = ["Alice", "Bob", "Charlie"]; 
manageStudents(students);
