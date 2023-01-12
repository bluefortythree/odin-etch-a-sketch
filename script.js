const body = document.body
const div = document.getElementById('parent')

for (let i=0; i<16; i++) {
    const row = document.createElement('div')
    row.innerText = "I am a row"
    row.classList.add('row')
    div.append(row)
    for (let i=0; i<16; i++) {
        const column = document.createElement('div')
        column.innerText = "I am a column"
        column.classList.add('column')
        row.append(column)
    }
}
