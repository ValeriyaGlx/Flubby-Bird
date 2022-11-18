let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');


let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();


const gap = 110;
let xPos = 10;
let yPos = 250;
const grav = 1;

let score = 0;




bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';


function draw (){
ctx.drawImage(bg, 0, 0);
ctx.drawImage(bird, xPos, yPos);


yPos += grav;
requestAnimationFrame(draw);

for (let i=0; i < pipe.length; i++){
    ctx.drawImage(pipeUp,  pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom,  pipe[i].x, pipe[i].y+pipeUp.height+gap);
    pipe[i].x --;

    if(pipe[i].x===90){
        pipe.push({
            x: canvas.width,
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
    })
    }

    // touch tracking
    if (yPos + bird.height === canvas.height-fg.height 
       || xPos+bird.width >= pipe[i].x
       && xPos <= pipe[i].x + pipeUp.width
       && (yPos <= pipe[i].y + pipeUp.height
        || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
       ){
    location.reload()
    }
        //score
        if(pipe[i].x==5){
            score++
        }


        if (yPos + bird.height >= canvas.height-fg.height 
            || xPos+bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
             || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            ){
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, canvas.height / 2 - 15, canvas.width, 50)
        
        ctx.fillStyle = "#000";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", 50, canvas.height / 2 + 20);
            }

}

ctx.drawImage(fg, 0, 0 + canvas.height-fg.height);

ctx.fillStyle = "#000";
ctx.font = "24px Arial";
ctx.fillText("Score: " + score, 10, canvas.height - 20);
}

fg.onload = draw;


document.addEventListener('click', moveUp);
function moveUp (){
yPos -=35};

//create pipes
let pipe = [];
pipe [0] = {
x: canvas.width,
y: 0
}



