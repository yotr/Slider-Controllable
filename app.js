let box = document.querySelector(".box");
for (let i = 0; i < 50; i++) {
    let div = document.createElement("div");
    div.className = "item";
    div.textContent = i;
    box.appendChild(div);
}



nextSlide = () => {
    let items = document.querySelectorAll('.item');
    box.appendChild(items[0]);
}

prevSlide = () => {
    let items = document.querySelectorAll('.item');
    box.appendChild(items[items.length - 1]);
}


window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        nextSlide();
    } else {
        prevSlide();
    }
})