let buttons = document.querySelectorAll('button');
let board = document.querySelector('.gridContainer');
let colorPicker = document.querySelector('.colorPicker');
let backgroundColorPicker = document.querySelector('.backgroundColorPicker');
let backgroundColor = '';
let color = '';


//Active class
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

//Color Selection
backgroundColorPicker.addEventListener('input', () => {
    backgroundColor = backgroundColorPicker.value;
    board.innerHTML = '';
    createBoard(16);
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

