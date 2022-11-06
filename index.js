//const canvas = document.getElementById('main');
const canvas1 = document.getElementById('frontPage');
let c = canvas1.getContext('2d');
//let ctx2 = canvas2.getContext('2d');

function resize(){
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);
//document.addEventListener('keydown', liiku);
//document.addEventListener('keydown', vaihdasuunta);

// Etusivun tausta:
let bgColorD = "rgb(27,5,32)";
let bgColor = "rgb(73,17,85)";

const gradient = c.createRadialGradient(window.innerWidth/2, window.innerHeight/2, 100, window.innerWidth/2, window.innerHeight/2, window.innerWidth/2-100);
gradient.addColorStop(0, bgColorD);
gradient.addColorStop(1, bgColor);

c.fillStyle = gradient;
c.fillRect(0, 0, window.innerWidth, window.innerHeight);
c.save();
// Otsikko:
const textGradient =c.createLinearGradient(window.innerWidth/2-100, window.innerHeight/2-50, window.innerWidth/2+100, window.innerHeight/2+50);
textGradient.addColorStop(0, "blue");
textGradient.addColorStop(0.1, "pink");
textGradient.addColorStop(0.2, "green");
textGradient.addColorStop(0.3, "white");
textGradient.addColorStop(0.4, "red");
textGradient.addColorStop(0.5, "yellow");
textGradient.addColorStop(0.6, "blue");
textGradient.addColorStop(0.7, "white");
textGradient.addColorStop(0.8, "green");
textGradient.addColorStop(1, "blue");

c.font = "70px Shrikhand";
c.fillStyle = textGradient;
c.textAlign = "center";
c.strokeStyle = "black";
c.strokeText("Pops!", canvas1.width/2, canvas1.height/2);
c.fillText("Pops!", canvas1.width/2, canvas1.height/2);
c.scale(0, 0);
c.scale(1, 1);
/*
c.font = "120px Shrikhand";
c.fillStyle = textGradient;
c.textAlign = "center";
c.strokeStyle = "black";
c.strokeText("Pops!", canvas1.width/2, canvas1.height/2);
c.fillText("Pops!", canvas1.width/2, canvas1.height/2);*/
/*
let pallo;

let button = document.getElementById('load');
button.addEventListener('click', startGame);

let pelialue = {
    canvas: document.getElementById('gameArea'),
    startGame: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
    }
}

function startGame(){
    let frontPage = document.getElementsByClassName('aloitus');
    for (let i = 0; i < frontPage.length; i++){
        frontPage[i].style.display = 'none';
    }
    canvas.style.display = "block";
    
    pallo = new Component(45, window.innerHeight-70, "red") 
    pallo.style.left = "0px";
    let pommi = new Component(600, 40, "pink")
}

function Component(x, y, color){
    this.x = x;
    this.y = y;
    //ctx = pelialue.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}


let nopeusX = 5;

function liiku(event){//tehdään pallon liikkuminen mahdollisesksi:
    
    if (event.keyCode == 39){//nuoli oikealle
        sijaintiX = parseInt(pallo.style.left) + suuntaX * nopeusX;
        pallo.style.left = sijaintiX + "px";
    }
    if (event.keyCode == 37){//nuoli vasemmalle
        sijaintiX = parseInt(pallo.style.left) + suuntaX * nopeusX;
        pallo.style.left = sijaintiX + "px"; 
    } 
}


function vaihdasuunta(event){
    if (event.keyCode == 37){
        suuntaX = -1;
    }
    if (event.keyCode == 39){
        suuntaX = 1;
    }
}*/