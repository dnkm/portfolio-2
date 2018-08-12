let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pen = canvas.getContext('2d');
let game = {
    width: canvas.width * 3,
    height: canvas.Height * 3
};

let circles = [];
let colors = ['tomato', 'lightgreen', 'gold', 'skyblue', 'silver'];

circles[0] = new Player(100, 100, 10, 'black', canvas, pen);

for (let i = 1; i < 20; i++) {
    let size = Math.random() * 5 + 5;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = colors[i % colors.length];
    circles[i] = new Circle(x, y, size, color, canvas, pen, circles[0]);
}

function play() {
<<<<<<< HEAD
    // pen.setTransform(1,0,0,1,0,0);

    pen.beginPath();
    // pen.translate(canvas.width/2 - circles[0].x, canvas.height/2 - circles[0].y);
    // pen.rect(0, 0, canvas.width, canvas.height);
    // pen.fillStyle = 'rgba(0, 0, 0, 0.1)';
=======

    pen.setTransform(1, 0, 0, 1, 0, 0);

    pen.beginPath();
    pen.translate(canvas.width / 2 - circles[0].x, canvas.height / 2 - circles[0].y);
    pen.rect(0, 0, canvas.width, canvas.height);
>>>>>>> 0b21727ec6e462cd7c35b9781c396bc2f0694caf
    pen.fillStyle = 'white';
    pen.fill();

    drawGrid();

    circles.forEach(circle => {
        circle.move();
        circle.draw();
    })

    requestAnimationFrame(play);
}

function drawGrid() {
<<<<<<< HEAD
    pen.strokeStyle = '#777';

    for(let i=0; i<10; i++)
    {
        pen.beginPath();
        pen.moveTo(i/10 * canvas.width , 0);
        pen.lineTo(i/10 * canvas.width , canvas.height);
        pen.stroke();

        pen.beginPath();
        pen.moveTo(0 , i/10 *canvas.height);
        pen.lineTo(canvas.width , i/10 *canvas.height);
=======
    pen.strokeStyle = "#eee";

    for (let i = 0; i < 30; i++) {
        pen.beginPath();
        pen.moveTo(i / 30 * game.width, 0);
        pen.lineTo(i / 30 * game.width, game.height);
        pen.stroke();

        pen.beginPath();
        pen.moveTo(0, i / 30 * game.height);
        pen.lineTo(game.width, i / 30 * game.height);
>>>>>>> 0b21727ec6e462cd7c35b9781c396bc2f0694caf
        pen.stroke();
    }
}

play();