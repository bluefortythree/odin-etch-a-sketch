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

for (let i=0; i<width; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    div.append(row)
    for (let i=0; i<width; i++) {
        const column = document.createElement('div')
        column.classList.add('column')
        row.append(column)
    }
}


for(let i=0; i<width*width; i++) {
    const hover = document.getElementsByClassName('column')[i];
    hover.addEventListener('mouseover', () => {
        hover.setAttribute('style', 'background-color: pink')
        })
    hover.addEventListener('click', () => {
        hover.setAttribute('style', 'background-color: white')
    })
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        hover.setAttribute('style', 'background-color: white')
    })
}

