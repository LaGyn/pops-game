const canvas = document.getElementById('gameArea');
//let ctx = canvas.getContext('2d');

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);
//document.addEventListener('keydown', liiku);
//document.addEventListener('keydown', vaihdasuunta);

let button = document.getElementById('load');
button.addEventListener('click', startGame);

let pelialue = {
    canvas: document.getElementById('gameArea'),
    start: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

let pallo;
let pommi;
let colors = ['pink', 'green', 'yellow', 'orange'];
function startGame(){
    let frontPage = document.getElementById('tausta');
    frontPage.style.display = 'none';
    pelialue.start();
    canvas.style.display = "block";
    pallo = new component(45, window.innerHeight-70, "red") 
    pommi = new component(600, 40, "pink")
}

function component(x, y, color){
    this.x = x;
    this.y = y;
    ctx = pelialue.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

/*
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