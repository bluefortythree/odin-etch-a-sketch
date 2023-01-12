const body = document.body
const div = document.getElementById('parent')

for (let i=0; i<16; i++) {
    const squares = document.createElement('div')
    squares.innerText = "Hello World"
    div.append(squares)
}

