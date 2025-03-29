
function timer(duration, onComplete){
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    })
}

timer(10000, (reply)  => {
    console.log(reply);
})