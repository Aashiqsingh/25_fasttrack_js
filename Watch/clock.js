function getTime(){

    const date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


    let hours = document.getElementById("hours")
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");


    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    mins.innerHTML = min < 10 ? "0" + min : min;
    secs.innerHTML = sec < 10 ? "0" + sec : sec;


    secs.map((e))


}
setInterval(()=>{
    getTime();

},1000)