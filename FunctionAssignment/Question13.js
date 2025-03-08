function taskManagementSystem() {
    let tasks = ["T1", "T2", "T3", "T4", "T5"];

    let newTasks = [];
    for (let i = 1; i < tasks.length; i++) { 
        newTasks[i - 1] = tasks[i]; 
    }
    tasks = newTasks; 

    let highPriorityTasks = ["Priority Task 1", "Priority Task 2"];
    newTasks = [];

    for (let i = 0; i < highPriorityTasks.length; i++) {
        newTasks[i] = highPriorityTasks[i]; 
    }
    for (let i = 0; i < tasks.length; i++) {
        newTasks[highPriorityTasks.length + i] = tasks[i]; 
    }
    tasks = newTasks; 

    let newTask = "Updated Task";
    tasks[tasks.length - 1] = newTask; 

    console.log(tasks);
}

taskManagementSystem(); 
