const body = document.body
const div = document.getElementById('parent')

for (let i=0; i<16; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    div.append(row)
    for (let i=0; i<16; i++) {
        const column = document.createElement('div')
        column.classList.add('column')
        row.append(column)
    }
}
