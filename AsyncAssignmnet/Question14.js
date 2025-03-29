console.log("Begin"); 

setTimeout(() => {
    console.log("Timeout Task"); 
    }, 0); 

Promise.resolve().then(() => {
     console.log("Promise Task");
    }); 
     
console.log("End");

/* In the above code there is no issues in the code every syntax and functions are
    correctly written.
    
    Here the output we are getting in these specific order i.e "Begin" , "End" , "Promise Task" , "Timeout Task" because "Begin" 
    and "End" synchronous function which will be printed just after running the code one by one, but "Promise Task" and "Timeout 
    Task" are asynchronous function due to which it firstly go Web API and then event loop will come in process if the callback
    queue have function and call stack is empty then the event loop will print the function which will have less timeout to 
    execute so in this code "Promise Task" will be printed first because it has not any time given to execute and after that "Timeout
    Task" will be printed. This is the reason why the output will be in this order.
    */