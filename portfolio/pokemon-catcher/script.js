const icons = [
    "https://image.flaticon.com/icons/svg/189/189001.svg",
    "https://image.flaticon.com/icons/svg/188/188987.svg",
    "https://image.flaticon.com/icons/svg/188/188990.svg",
    "https://image.flaticon.com/icons/svg/188/188989.svg",
    "https://image.flaticon.com/icons/svg/188/188993.svg",
    "https://image.flaticon.com/icons/svg/189/189000.svg",
    "https://image.flaticon.com/icons/svg/188/188995.svg",
    "https://image.flaticon.com/icons/svg/188/188997.svg",
];

const y1 = window.innerHeight-100, y2=100;

icons.forEach(function (icon, i) {
    let img = document.createElement("img");
    img.src = icon;
    document.body.appendChild(img);

    img.style.top = i * 20 + 50 + "px";
    img.style.left = i * 20 + "px";

    img.speedY = Math.random() * 10 + 10;
    img.move = function() {
        let y = parseFloat(this.style.top) + this.speedY;
        this.style.top = y + "px";

        if (y > y1) {
            img.speedY = -Math.abs(img.speedY);
        }
        if (y < y2) {
            img.speedY = Math.abs(img.speedY);
        }
    }
});

setInterval(function() {

    document.querySelectorAll("img").forEach(function(img) {
        img.move();
    });

}, 1000/30);

document.addEventListener('keydown', function(event) {
    document.writeln(event.key);
})