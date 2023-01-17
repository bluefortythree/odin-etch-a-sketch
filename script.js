const body = document.body
const div = document.getElementById('parent')

let width = makeGrid()
function makeGrid() {
    for (i=0; i<1; i++) {
        const gridSize = prompt("Please choose a number from 1-100 to be your grid's height/width:")
        if(gridSize > 0 && gridSize < 101 && gridSize % 1 === 0) {
            return gridSize;
        } else {
            alert("Please enter a valid number!")
            i--;
        }
    }
}

console.log(width);

let initialSize = 868;

let dimensions = (initialSize/width)+'px';
console.log(dimensions);

for (let i=0; i<width; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    div.append(row)
    for (let i=0; i<width; i++) {
        const column = document.createElement('div')
        column.style.width = dimensions;
        column.style.height = dimensions;
        column.classList.add('column')
        row.append(column)
    }
}

for(let i=0; i<width*width; i++) {
    const hover = document.getElementsByClassName('column')[i]
    const row = document.getElementsByClassName('row')[i];
    let divColor = getRandomColor();
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i=0; i<6; i++) {
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
    hover.addEventListener('mouseover', () => {
        hover.style.backgroundColor = divColor
        })
    hover.addEventListener('click', () => {
        hover.style.backgroundColor = 'white'
    })
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        hover.style.backgroundColor = 'white'
    })
}

let changeSize = document.getElementById('changeSize');
changeSize.addEventListener('click', () => {
    location.reload();
})

