var counter = document.getElementById("counter");
var followers = document.getElementById("followers");
let count = 1;

setInterval(()=> {
    if(count<1000) {
        count++;
        counter.innerText = count;
    }
    else {
        return;
    }
}, 0.5);

setTimeout(()=>{
    followers.innerText = "Thousand people";
}, 5000);