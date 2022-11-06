const canvas = document.getElementById('gameArea');
let ctx = canvas.getContext('2d');

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);
//document.addEventListener('keydown', liiku);
//document.addEventListener('keydown', vaihdasuunta);

let pallo;

let button = document.getElementById('load');
button.addEventListener('click', startGame);
/*
let pelialue = {
    canvas: document.getElementById('gameArea'),
    startGame: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
    }
}*/

function startGame(){
    let frontPage = document.getElementById('tausta');
    frontPage.style.display = 'none';
    /*for (let i = 0; i < frontPage.length; i++){
        frontPage[i].style.display = 'none';
    }*/
    canvas.style.display = "block";
    /*
    pallo = new Component(45, window.innerHeight-70, "red") 
    pallo.style.left = "0px";
    let pommi = new Component(600, 40, "pink")*/
}
/*
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