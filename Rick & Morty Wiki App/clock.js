function updateClock(){
    const currentTime = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const time = currentTime.toLocaleTimeString('en-GB');
    const day = days[currentTime.getDay()];
    const date = `${months[currentTime.getMonth()]} ${currentTime.getDate()}, ${currentTime.getFullYear()}`;
    document.getElementById("clock").textContent = `${time} ${day} ${date}`;
}
setInterval(updateClock, 1000);
updateClock();