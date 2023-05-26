let playerState = 'sit';
const dropdown = document.getElementById('animations');

dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// Global Variables
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// bring images to Js
const playerImage = new Image();
playerImage.src = 'shadow_dog.webp';

// Divide the image 
const spriteWidth = 575;
const spriteHeight = 523;

// Slow down the speed
let gameFrame = 0;
const staggerFrames = 5;

// to Make array of different shapes
const spariteAnimations = [];
const animationStates = [
    {   name: 'idle',  frames: 7, } ,
    {   name: 'jump',  frames: 7, } ,
    {   name: 'fall',  frames: 7, } ,
    {   name: 'run',   frames: 9, } ,
    {   name: 'dizzy', frames: 11,} ,
    {   name: 'sit',   frames: 5, } ,
    {   name: 'roll',  frames: 7, } ,
    {   name: 'bite',  frames: 7, } ,
    {   name: 'ko',    frames: 12,} ,
    {   name: 'getHit',frames: 4, } ,
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let i = 0; i < state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spariteAnimations[state.name] = frames;
});


function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    let position = Math.floor(gameFrame/staggerFrames) % spariteAnimations[playerState].loc.length;

    let frameX = spriteWidth * position;
    let frameY = spariteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX , frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    // if (gameFrame % staggerFrames == 0) {

    //     if(frameX < 4) frameX++;
    //     else frameX = 0;
        
    // }


    gameFrame++;
    requestAnimationFrame(animate);
};
animate();