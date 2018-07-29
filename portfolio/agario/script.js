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
    pen.beginPath();
    pen.rect(0, 0, canvas.width, canvas.height);
    pen.fillStyle = 'white';
    pen.fill();

    circles.forEach(circle => {
        circle.move();
        circle.draw();
    })

    // setTimeout(play, 1000/60); 
    requestAnimationFrame(play);
}

play();