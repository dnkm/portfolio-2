let addBtn = function() {
    let textBox = document.querySelector("input");

    if (textBox.value === "") return;
    
    let btn = document.createElement("button");
    btn.innerText = textBox.value;
    textBox.value = "";
    btn.classList.add("todo");
    document.body.appendChild(btn);

    btn.addEventListener('click', function(){
        document.body.removeChild(btn);
    });

}

let btnAdd = document.querySelector(".add-btn");
btnAdd.addEventListener('click', addBtn);