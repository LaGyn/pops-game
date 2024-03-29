const canvas = document.getElementById('gameArea');
let ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('playerObject')
let c = canvas2.getContext('2d');

function resize(){
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-20;
    canvas2.width = window.innerWidth-20;
    canvas2.height = window.innerHeight-20;
}

resize();
window.addEventListener('resize', resize);
window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

window.onload = function() {
    const prelude = new Audio('audios/notification.mp3')
    prelude.loop = false;
    prelude.play()
}

let button = document.getElementById('load');
button.addEventListener('click', startGame);

const colorLightBlue = 'rgb(154, 177, 226)';
const colorMidBlue = 'rgb(104, 133, 195)';
const colorDarkerMidBlue = 'rgb(97, 119, 166)';
const BgColorDarkBlue = 'rgb(85, 105, 149)';
const colors = ['#FFCCCC', '#9999FF', '#FF99FF', '#99FFCC', '#FF66B2', '#FF0000'];
let points = 0;
let kosketus = false;
let jana;

function drawBackground(){
    ctx.fillStyle = BgColorDarkBlue;
    ctx.fillRect(0, 0, window.innerWidth-20, window.innerHeight-20)
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(100, 70);
    ctx.lineTo(200, 150);
    ctx.lineTo(300, 70);
    ctx.lineTo(400, 150);
    ctx.lineTo(500, 70);
    ctx.lineTo(600, 150);
    ctx.lineTo(700, 70);
    ctx.lineTo(800, 150);
    ctx.lineTo(900, 70);
    ctx.lineTo(1000, 150);
    ctx.lineTo(1100, 70);
    ctx.lineTo(1200, 150);
    ctx.lineTo(1300, 70);
    ctx.lineTo(1400, 150);
    ctx.lineTo(1500, 70);
    ctx.lineTo(1600, 150);
    ctx.lineTo(canvas.width, 70);
    ctx.lineTo(canvas.width,0);
    ctx.lineTo(0,0);
    ctx.closePath();
    ctx.fillStyle = colorLightBlue;
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(canvas.width, 200);
    ctx.lineTo(1550,250)
    ctx.lineTo(1470, 180)
    ctx.lineTo(1380, 300)
    ctx.lineTo(1300, 150)
    ctx.lineTo(1225, 200)
    ctx.lineTo(1150, 170)
    ctx.lineTo(1080, 280)
    ctx.lineTo(1025, 190)
    ctx.lineTo(950, 250)
    ctx.lineTo(880, 150)
    ctx.lineTo(820, 230)
    ctx.lineTo(730, 130)
    ctx.lineTo(600, 200)
    ctx.lineTo(480, 120)
    ctx.lineTo(380, 230)
    ctx.lineTo(320, 140)
    ctx.lineTo(250, 190)
    ctx.lineTo(130, 140)
    ctx.lineTo(0, 190)
    ctx.lineTo(0, 300)
    ctx.lineTo(140, 230)
    ctx.lineTo(220, 400)
    ctx.lineTo(320, 280)
    ctx.lineTo(450, 450)
    ctx.lineTo(560, 320)
    ctx.lineTo(620, 370)
    ctx.lineTo(750, 300)
    ctx.lineTo(880, 470)
    ctx.lineTo(970, 350)
    ctx.lineTo(1100, 400)
    ctx.lineTo(1250, 300)
    ctx.lineTo(1325, 350)
    ctx.lineTo(1420, 300)
    ctx.lineTo(1550, 460)
    ctx.lineTo(canvas.width, 370)
    ctx.closePath();
    ctx.fillStyle = colorMidBlue;
    ctx.fill();
     
    ctx.beginPath();
    ctx.moveTo(0, 330)
    ctx.lineTo(110, 290)
    ctx.lineTo(110, 290)
    ctx.lineTo(200, 450)
    ctx.lineTo(320, 340)
    ctx.lineTo(430, 510)
    ctx.lineTo(560, 420)
    ctx.lineTo(590, 480)
    ctx.lineTo(720, 350)
    ctx.lineTo(880, 500)
    ctx.lineTo(975, 410)
    ctx.lineTo(1100, 500)
    ctx.lineTo(1240, 350)
    ctx.lineTo(1340, 410)
    ctx.lineTo(1410, 330)
    ctx.lineTo(1500, 500)
    ctx.lineTo(canvas.width, 450)
    ctx.lineTo(canvas.width, 600)
    ctx.lineTo(1450, 650)
    ctx.lineTo(1400, 450)
    ctx.lineTo(1240, 550)
    ctx.lineTo(1200, 510)
    ctx.lineTo(1080, 640)
    ctx.lineTo(980, 510)
    ctx.lineTo(920, 550)
    ctx.lineTo(710, 490)
    ctx.lineTo(600, 640)
    ctx.lineTo(510, 520)
    ctx.lineTo(350, 580)
    ctx.lineTo(280, 510)
    ctx.lineTo(150, 530)
    ctx.lineTo(90, 450)
    ctx.lineTo(0, 500)
    ctx.closePath();
    ctx.fillStyle = colorDarkerMidBlue;
    ctx.fill();

    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';
    ctx.fillText(`POINTS: ${points}`, 20, 30);
}

const player = {
    x: 45,
    y: window.innerHeight-70,
    size: 40,
    color: 'white',
    speedX: 10,
    speedY: 10
}
let arvottu = Math.floor(Math.random() * [colors.length])
let bombColor = colors[arvottu];

let pommi = {
    posX: Math.floor((Math.random() * (canvas.width - 50)) + 50),
    posY: 0 - 20,
    size: 40,
    bcolor: bombColor,
    speed: Math.floor((Math.random() * 10) + 3)
}

function startGame(){
    let frontPage = document.getElementById('tausta');
    let taustavari = document.querySelector('body');
    frontPage.style.display = 'none';
    taustavari.style.backgroundImage = 'none'; // Piilottaa etusivun radial-gradientin joka on tehty background imagella
    taustavari.style.backgroundColor = colorMidBlue;
    canvas.style.display = "block";
    canvas2.style.display = "block";
    setInterval(mainLoop, 1000/60)
}

let sh = 0;
function drawPlayer(x, y, size, color){
    c.clearRect(0, 0, canvas2.width, canvas2.height)
    c.beginPath();
    c.arc(x, y, size, 0, 2 * Math.PI);
    c.fillStyle = color;
    c.fill();
    
    if (kosketus === true) {
        sh += 3
        c.shadowColor = 'white';
        c.shadowBlur = sh;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        console.log('sh: ' + sh)
        kosketus = false;
    }
}

function drawBomb(posX, posY){
    bombColor = colors[arvottu]
    ctx.beginPath();
    ctx.arc(posX, posY, 40, 0, 2 * Math.PI)
    ctx.fillStyle = bombColor;
    ctx.fill();
    //console.log(pommi.posX)
}

function arpooVarin() {
    arvottu = Math.floor(Math.random() * [colors.length])
    return arvottu;
}

function mainLoop(){
    drawBackground();
    drawPlayer(player.x, player.y, player.size, player.color, player.speedX, player.speedY);
    playerMove();
    //pommi = new component(pommi.x, pommi.y, pommi.bcolor, pommi.speed)
    drawBomb(pommi.posX, pommi.posY)
    bombMove()
}

let leftKeyPress = false;
let rightKeyPress = false;
let upKeyPress = false;
let downKeyPress = false;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

function keyPressed(event){
    //console.log(event.keyCode)
    if(event.keyCode == LEFT_KEY){
        leftKeyPress = true;
    }
    if(event.keyCode == RIGHT_KEY){
        rightKeyPress = true;
    }
    if(event.keyCode == UP_KEY){
        upKeyPress = true;
    }
    if(event.keyCode == DOWN_KEY){
        downKeyPress = true;
    }
}

function keyReleased(event){
    if(event.keyCode == LEFT_KEY){
        leftKeyPress = false;
    }
    if(event.keyCode == RIGHT_KEY){
        rightKeyPress = false;
    }
    if(event.keyCode == UP_KEY){
        upKeyPress = false;
    }
    if(event.keyCode == DOWN_KEY){
        downKeyPress = false;
    }
}

function playerMove(){
    //console.log('liiku')
    if(leftKeyPress && player.x > 50){
        player.x -= player.speedX;
    }
    if(rightKeyPress && player.x < canvas2.width - 50){
        player.x += player.speedX;
    }
    if(upKeyPress && player.y > 50){
        player.y -= player.speedY;
    }
    if(downKeyPress && player.y < window.innerHeight-70){
        player.y += player.speedY;
    }
    laskePisteet();
}

// Pommit tippuu alaspäin vaihtelevilla nopeuksilla:
function bombMove(){
    pommi.posY += pommi.speed;
    if (pommi.posY > canvas.height) {
        pommi.posY = 0 - 20;
        pommi.posX = Math.floor((Math.random() * (canvas.width - 50)) + 50);
        pommi.speed = Math.floor((Math.random() * 10) + 3)
        arpooVarin()
    }
}

function laskePisteet() {
    jana = Math.sqrt(((pommi.posX - player.x) * (pommi.posX - player.x)) + ((pommi.posY - player.y) * (pommi.posY - player.y)));
    if (arvottu == 5 && jana <= 80){
        points = 0;
        sh = 0;
        //console.log('pisteet: ' + points)
    }
    if (jana <= 80){
        kosketus = true;
        pommi.posY = 0 - 20; // Pommi palautuu lähtöön
        pommi.posX = Math.floor((Math.random() * (canvas.width - 50)) + 50);
        pommi.speed = Math.floor((Math.random() * 10) + 3)
        
        points += 10;
        touchSound()
        arpooVarin()
        //console.log('pisteet: ' + points) 
        console.log(kosketus)
    } 
    return kosketus; 
}

function touchSound(){
    const touch = new Audio('audios/pop-94319.mp3')
    touch.loop = false;
    touch.play()
}
