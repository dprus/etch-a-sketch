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


//Active class
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

//Size slider 
sizeSlider.addEventListener('input', () => {
    sizeSliderValue = sizeSlider.value;
    sliderText.innerHTML = sizeSliderValue + " x " + sizeSliderValue;
    // size = Number(sizeSliderValue);
    // console.log(size);
    return Number(sizeSliderValue);

})


//Color Selection
backgroundColorPicker.addEventListener('input', () => {
    backgroundColor = backgroundColorPicker.value;
    board.innerHTML = '';
    createBoard(`${Number(sizeSliderValue)}`);
})



function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = backgroundColor;
        board.insertAdjacentElement("beforeend", div);
    }
}

