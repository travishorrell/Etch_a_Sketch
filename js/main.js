let color = "black";
let slider = document.getElementById("boardSizeSlider");
let sizeOutput = document.getElementById("boardSizeOutput");
let defaultSize = 16;


//Creates the board of divs and repeats till the divs are created
function populateBoard(BoardSize){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div=> div.remove());
    board.style.gridTemplateColumns = `repeat(${BoardSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${BoardSize}, 1fr)`;
    slider.oninput = function() {
        sizeOutput.innerHTML = this.value;
      }
    
    let amount = BoardSize * BoardSize;
    for(let i = 0; i < amount; i++)
    {
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
}

//Run the function to create the board and start the program
populateBoard(defaultSize);
sizeOutput.innerHTML = defaultSize;

//Changes the size of the divs on the board then reloads the board
function changeSize(input)
{
    populateBoard(input);
}

//Changes the color of the background of each div when the mouse is hovered over
function colorSquare()
{
    this.style.backgroundColor = color;
}

//chnages the background color of each div
function changeColor(colorChange)
{
    //Creates a random HEX code for a color
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    if(colorChange == 0)
    {
        color = 'white';
    }
    else if(colorChange == 1)
    {
        color = 'black';
    }
    else if(colorChange == 2)
    {
        color = randomColor;
    }
    
}

function clearBoard()
{
    populateBoard(defaultSize);
    sizeOutput.innerHTML = defaultSize;
    slider.value = 16;
}