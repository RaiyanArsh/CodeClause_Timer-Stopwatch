const wt = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let sec = 0; //
let interval=null;

start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

function timer ()  {
sec++;
let hrs = Math.floor(sec/(60*60));
let min = Math.floor((sec - (hrs*3600)) / 60);
let secs = sec % 60;

if(secs<10) secs='0'+secs;
if(min<10) min='0'+ min;
if(hrs<10) hrs='0'+ hrs;

wt.innerText = `${hrs}:${min}:${secs}`;

}

function start () {
    if(interval)
        return;
    interval = setInterval(timer,1000); //
}

function stop (){
   clearInterval(interval);
   interval = null; 
}

function reset () {
    stop();
    sec = 0;
    wt.innerText = '00:00:00';
    stop();
}
