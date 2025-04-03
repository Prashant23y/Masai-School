fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
    users.forEach(user => console.log(user.name));
})