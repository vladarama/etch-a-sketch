
// get the main container from html and store as "container"

const container = document.querySelector(".main_container")




// loop that will create the divs

for (let i = 0; i < 256; i++) {

    const grid = document.createElement('div')

    grid.classList = 'div_one'

    container.appendChild(grid)


}

