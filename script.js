let buttons = document.querySelectorAll('button');
let board = document.querySelector('.gridContainer');
let colorPicker = document.querySelector('.colorPicker');
let backgroundColorPicker = document.querySelector('.backgroundColorPicker');
let backgroundColor = '';
let color = '';
let sizeSlider = document.querySelector('.sizeSlider');
let sliderText = document.querySelector('.sliderText');
let sizeSliderValue;
let size;
let clearBtn = document.querySelector('.clearBtn');
let allDivs = '';
let randomColor = document.querySelector('.rainbowBtn');



window.onload = function () {
    createBoard(16);
    color = '#4B4B4B';
}

//Active class
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});


//Color selection 
// colorPicker.addEventListener('input', () => {
//     color = colorPicker.value;
//     return color;
// })

//Random Colors
// randomColor.addEventListener('click', () => {
//     div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
// })


//Background Color Selection
backgroundColorPicker.addEventListener('input', () => {
    board.style.backgroundColor = backgroundColorPicker.value;
})
backgroundColorPicker.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
})

//Clear button
clearBtn.addEventListener('click', () => {
    board.style.backgroundColor = '#FFFFFF';
    backgroundColorPicker.value = '#FFFFFF';
    colorPicker.value = '#4B4B4B';
    clearBtn.classList.remove('active');
    // allDivs = document.querySelectorAll(".div").forEach(div => {
    //     div.style.backgroundColor = "#FFFFFF";
})
// })



// //Color Selection
// backgroundColorPicker.addEventListener('input', () => {
//     backgroundColor = backgroundColorPicker.value;
//     board.innerHTML = '';
//     createBoard(`${Number(sizeSliderValue)}`);
// })

//Size slider 
sizeSlider.addEventListener('input', () => {
    sizeSliderValue = sizeSlider.value;
    sliderText.innerHTML = sizeSliderValue + " x " + sizeSliderValue;
    size = Number(sizeSliderValue);
    // console.log(size);
    createBoard(size);
    // return size;

})
//Creating board
function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}


randomColor.addEventListener('click', () => {
    color == "random";
    return color;
})

//Changing divs color
function colorDiv() {
    if (randomColor.classList.contains("active")) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = colorPicker.value;
    }
}

function setColor(colorChoice) {
    divColor = colorChoice;
}