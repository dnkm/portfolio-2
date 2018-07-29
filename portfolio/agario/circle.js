class Circle {
    constructor(x, y, radius, color, canvas, pen, player) {
        this.canvas = canvas;
        this.pen = pen;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius;
        this.color = color;
        this.player = player;
        this.isDead = false;
    }
    move() {
        if (this.isDead) return;

        // move circle
        this.x += this.vx;
        this.y += this.vy;

        // check collision
        if (this.x <= this.radius) {
            this.vx = Math.abs(this.vx);
        }
        else if (this.x >= this.canvas.width - this.radius) {
            this.vx = -Math.abs(this.vx);
        }
        if (this.y <= this.radius) {
            this.vy = Math.abs(this.vy);
        }
        else if (this.y >= this.canvas.height - this.radius) {
            this.vy = -Math.abs(this.vy);
        }

        if (this.collided()) {
            this.isDead = true;
            setTimeout(()=>{
                this.isDead = false;
            }, 3000);
        }
    }
    collided() {
        let p = this.player;
        let c = this;

        let xCol1 = p.x >= c.x - c.radius - p.radius;
        let xCol2 = p.x <= c.x + c.radius + p.radius;

        let yCol1 = p.y >= c.y - c.radius - p.radius;
        let yCol2 = p.y <= c.y + c.radius + p.radius;
        

        return xCol1 && xCol2 && yCol1 && yCol2 && this.collided_precise();
    }
    collided_precise() {
        let p = this.player;
        let c = this;

        let actual = Math.pow(p.x - c.x, 2) + Math.pow(p.y - c.y, 2);
        let minSq = Math.pow(p.radius + c.radius, 2);

        return actual <= minSq;
    }
    draw() {
        if (this.isDead) return;

        // draw circle
        this.pen.beginPath();
        // this.pen.translate(this.canvas.width/2 - this.player.x, this.canvas.height/2 - this.player.y);
        this.pen.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.pen.fillStyle = this.color;
        this.pen.fill();
    }
}

class Player extends Circle {
    constructor(x, y, radius, color, canvas, pen) {
        super(x, y, radius, color, canvas, pen);

        this.targetX = x;
        this.targetY = y;
        this.speed = 1;
        this.player = this;

        document.addEventListener('mousemove', (event) => {
            this.targetX = event.clientX;
            this.targetY = event.clientY;
        });
    }
    move() {
        let dy = this.targetY - this.y;
        let dx = this.targetX - this.x;
        let angle = Math.atan2(dy, dx);
        
        let vx = this.speed * Math.cos(angle);
        let vy = this.speed * Math.sin(angle);

        this.x += vx;
        this.y += vy;
    }
}