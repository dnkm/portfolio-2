let prevSelectBtn = undefined;

// initialize deck
for(let i=0; i<50; i++) {
    let btn = document.createElement("button");
    btn.innerText = Math.floor(i / 2);
    btn.style.color = "orange";
    btn.style.background = "orange";
    btn.style.width = btn.style.height = "40px";
    document.body.appendChild(btn)

    btn.addEventListener('click', function() {
        if (btn.style.background === "black") return;

        btn.style.background = "black";
        if (prevSelectBtn) {
            if (prevSelectBtn.innerText === btn.innerText) {
                prevSelectBtn = undefined;
            } else {
                setTimeout(function() {
                    prevSelectBtn.style.background = "orange";
                    btn.style.background = "orange";
                    prevSelectBtn = undefined;
                }, 1000);
            }
            
        } else {
            prevSelectBtn = btn;
        }
        
    })
}

// shuffle
for(let i=0; i<1000; i++) {
    let randIndex = Math.floor(Math.random() * 50);
    let randBtn = document.querySelectorAll("button")[randIndex];
    document.body.appendChild(randBtn);
}