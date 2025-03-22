let evaluateEmployees = (employees) => {
    return employees
        .filter(emp => emp.tasksCompleted > 5)
        .map(emp => {
            let performance = emp.rating > 4.5 ? "Excellent" :
                              emp.rating >= 3 ? "Good" : 
                              "Needs Improvement";
            return { name: emp.name, performance };
        })
        .sort((a, b) => {
            let order = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };
            return order[a.performance] - order[b.performance];
        });
};

let employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 5, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
