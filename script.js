const targetDate = new Date("May 15, 2026 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const gap = targetDate - now;

if(gap <= 0){
window.location.href = "password.html";
}

const days = Math.floor(gap / (1000*60*60*24));
const hours = Math.floor((gap % (1000*60*60*24)) / (1000*60*60));
const mins = Math.floor((gap % (1000*60*60)) / (1000*60));
const secs = Math.floor((gap % (1000*60)) / 1000);

document.getElementById("days").innerText = String(days).padStart(2,'0');
document.getElementById("hours").innerText = String(hours).padStart(2,'0');
document.getElementById("minutes").innerText = String(mins).padStart(2,'0');
document.getElementById("seconds").innerText = String(secs).padStart(2,'0');

},1000);
