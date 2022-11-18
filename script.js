let buttons = document.querySelectorAll('button');
let board = document.querySelector('.gridContainer');
let colorPicker = document.querySelector('.colorPicker');
createBoard(16);

//Active class
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

//Color Selection
colorPicker.addEventListener('input', () => {
    let color = colorPicker.value;

})


function createBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}