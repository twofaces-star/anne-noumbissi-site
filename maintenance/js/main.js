// COUNTDOWN

const timer = document.getElementById("timer");

let seconds = 120;

setInterval(()=>{

let m = Math.floor(seconds/60);
let s = seconds%60;

timer.innerHTML = `${m}m ${s}s`;

if(seconds>0){
seconds--;
}

},1000);



// MINI JEU

const playBtn = document.getElementById("playBtn");
const gameArea = document.getElementById("gameArea");
const gameBox = document.getElementById("gameBox");
const scoreDisplay = document.getElementById("score");

let score = 0;

playBtn.onclick=()=>{

gameArea.classList.remove("hidden");

spawnBug();

}


function spawnBug(){

const bug = document.createElement("div");

bug.classList.add("bug");

bug.innerHTML="🐞";

bug.style.left=Math.random()*260+"px";
bug.style.top=Math.random()*260+"px";

bug.onclick=()=>{

score++;

scoreDisplay.textContent=score;

bug.remove();

spawnBug();

}

gameBox.appendChild(bug);

setTimeout(()=>{

if(bug){

bug.remove();
spawnBug();

}

},1200);

}



// ANIMATION DIGITAL NETWORK

const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#d4af37";
ctx.fill();

particles.forEach(p2=>{

let dist = Math.hypot(p.x-p2.x,p.y-p2.y);

if(dist<120){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.strokeStyle="rgba(212,175,55,0.2)";
ctx.stroke();

}

});

});

requestAnimationFrame(animate);

}

animate();

window.onresize=()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}