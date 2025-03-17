const monthname = document.getElementById('month-name');
const dayname = document.getElementById('day-name');
const daynumber = document.getElementById('day-number');
const year = document.getElementById('year');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const ampm = document.getElementById("ampm");

const date = new Date();
console.log(date.getTime());
// Sun Mar 16 2025 19:23:10 GMT+0530 (India Standard Time)
const month = date.getMonth();

monthname.innerText = date.toLocaleString("en",{
    month:"long"
});

dayname.innerText = date.toLocaleString("en",{
    weekday: "long"
});

daynumber.innerText = date.getDate();
year.innerText = date.getFullYear();

setInterval(function(){
//console.log('Hello World!');
let time = new Date();
let hours = time.getHours();
if(hours > 12){
    ampm.innerText = "PM";
    hours = hours - 12;              //hours -= 12
}
if(hour == 0){
    hour = 12;
}

hour.innerText = (hours < 10) ? ("0" + hours) : (hours);

minute.innerText = (time.getMinutes() < 10) ? ("0" + time.getMinutes()) : (time.getMinutes());
second.innerText = (time.getSeconds() < 10) ? ("0" + time.getSeconds()) : (time.getSeconds());

// (condition)? (true):(false)

},1000);                                            //1000 milisecond = 1 second