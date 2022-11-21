let buttons = document.querySelectorAll('button');
let board = document.querySelector('.gridContainer');
let colorPicker = document.querySelector('.colorPicker');
let backgroundColorPicker = document.querySelector('.backgroundColorPicker');
let sizeSlider = document.querySelector('.sizeSlider');
let sliderText = document.querySelector('.sliderText');
let sizeSliderValue;
let size;
let clearBtn = document.querySelector('.clearBtn');
let randomColor = document.querySelector('.rainbowBtn');
let colorBtn = document.querySelector('.colorBtn');
let grayScaleBtn = document.querySelector('.grayScaleBtn');
let buttonDiv = document.querySelector('.buttons');
let boardDiv = document.querySelector('.board');
let sliderDiv = document.querySelector('.sizeSliderDiv');
let eraserBtn = document.querySelector('.eraserBtn');
let backgroundColor = "#F5F5F5";;


window.onload = function () {
    createBoard(16);
    colorBtn.classList.add('active');
}

//Active class
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});


//Background Color Selection
backgroundColorPicker.addEventListener('input', () => {
    backgroundColor = backgroundColorPicker.value;
    board.style.backgroundColor = backgroundColor;
})

backgroundColorPicker.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
})

//Clear button
clearBtn.addEventListener('click', () => {
    colorBtn.classList.add('active');
    board.style.backgroundColor = '#FFFFFF';
    backgroundColorPicker.value = '#FFFFFF';
    colorPicker.value = '#4B4B4B';
    clearBtn.classList.remove('active');
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = '#FFFFFF');
    buttonDiv.style.backgroundColor = "#F5F5F5";
    boardDiv.style.backgroundColor = "#F5F5F5";
    sliderDiv.style.backgroundColor = "#F5F5F5";

})



//Size slider 
sizeSlider.addEventListener('input', () => {
    sizeSliderValue = sizeSlider.value;
    sliderText.innerHTML = sizeSliderValue + " x " + sizeSliderValue;
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = '#FFFFFF');
    buttonDiv.style.backgroundColor = "#F5F5F5";
    boardDiv.style.backgroundColor = "#F5F5F5";
    sliderDiv.style.backgroundColor = "#F5F5F5";
    size = Number(sizeSliderValue);
    createBoard(size);
})
//Creating board
function createBoard(size) {
    // window.onload = this.style.backgroundColor = '#4B4B4B';
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

//Changing divs color
function randomGreyHex() {
    var v = (Math.random() * (256) | 0).toString(16);
    return "#" + v + v + v;
}



function colorDiv() {
    if (randomColor.classList.contains("active")) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (colorBtn.classList.contains("active")) {
        this.style.backgroundColor = colorPicker.value;
    } else if (grayScaleBtn.classList.contains("active")) {
        this.style.backgroundColor = randomGreyHex();
    } else if (eraserBtn.classList.contains("active")) {
        this.style.backgroundColor = "transparent";
    } else if (window.onload) {
        this.style.backgroundColor = '#4B4B4B';
    }
}


