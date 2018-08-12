let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pen = canvas.getContext('2d');

let circles = [];
let colors = ['tomato','lightgreen','gold','skyblue','silver'];

circles[0] = new Player(100, 100, 10, 'black',canvas, pen);

for(let i=1; i<20; i++) {
    let size = Math.random() * 5 + 5;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = colors[i % colors.length];
    circles[i] = new Circle(x, y, size, color, canvas, pen, circles[0]);
}

function play() {
    // pen.setTransform(1,0,0,1,0,0);

    pen.beginPath();
    // pen.translate(canvas.width/2 - circles[0].x, canvas.height/2 - circles[0].y);
    // pen.rect(0, 0, canvas.width, canvas.height);
    // pen.fillStyle = 'rgba(0, 0, 0, 0.1)';
    pen.fillStyle = 'white';
    pen.fill();

    drawGrid();

    circles.forEach(circle => {
        circle.move();
        circle.draw();
    })

    // setTimeout(play, 1000/60); 
    requestAnimationFrame(play);
}

function drawGrid() {
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
        pen.stroke();
    }
}

play();