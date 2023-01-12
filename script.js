const body = document.body


for (let i=0; i<16; i++) {
    const squares = document.createElement('div')
    squares.innerText = "Hello World"
    body.append(squares)
}


