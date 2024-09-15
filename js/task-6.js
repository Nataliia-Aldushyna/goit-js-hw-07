function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const lastInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");


function createBoxes(amount) {
    let height = 30;
    let width = 30;
    const markup = [];

    for (let i = 0; i < amount; i += 1) {
        let color = getRandomHexColor();
        markup.push(`<div style="width:${width}px;height:${height}px;background-color:${color}"></div>`)
        width += 10;
        height += 10;
    };
    boxes.innerHTML =  markup.join("");
};

function destroyBoxes() {
    boxes.innerHTML = "";
};

createBtn.addEventListener("click", () => {
    let boxesAmount = lastInput.value
    if (boxesAmount > 0 && boxesAmount <= 100) {
        createBoxes(boxesAmount); 
    } else {
        alert("Number must be in range 1-100") 
    }
    lastInput.value = "";
});

destroyBtn.addEventListener("click", () => {
    destroyBoxes();
});






