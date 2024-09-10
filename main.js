

function increase_size(){
    var p = document.querySelector("p");
    var currentSize = parseInt(window.getComputedStyle(p).fontSize);
    var h2 = document.querySelector("h2");
    p.style.fontSize = (currentSize + 2) + "px";
    h2.style.fontSize = (currentSize + 2) + "px";
}

function decreas_size(){
    var p = document.querySelector("p");
    var h2 = document.querySelector("h2");
    var currentSize = parseInt(window.getComputedStyle(p).fontSize);
    p.style.fontSize = (currentSize - 2) + "px";
    h2.style.fontSize = (currentSize - 2) + "px";
}

document.querySelector(".decrease").onclick = decreas_size;

document.querySelector(".increase").onclick = increase_size;