let color = "black";

function populateBoard(BoardSize){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div=> div.remove());
    board.style.gridTemplateColumns = `repeat(${BoardSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${BoardSize}, 1fr)`;

    let amount = BoardSize * BoardSize;
    for(let i = 0; i < amount; i++)
    {
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input)
{
    if(input < 2 || input > 100)
    {
        alert("Enter a number between 2 and 100");
    }
    else
    {
        populateBoard(input);
    }
    
}

function colorSquare()
{
    this.style.backgroundColor = color;
}

function changeColor()
{
    
}