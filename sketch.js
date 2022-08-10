
// get the main container from html and store as "container"

const container = document.querySelector(".main_container")


//get the color from the color_picker element

const color = document.getElementById('color_picker')


// function that creates the grid using the slider values

function createGrid(j) {

    // loop that will create the divs

    for (let i = 0; i < j; i++) {

        const grid = document.createElement('div')

        grid.classList = 'div_one'


        // border css
        grid.style.borderColor = "black"
        grid.style.borderStyle = "solid"
        grid.style.borderWidth = "1px"


        // calculates the size of each block
        const size = (512 / (Math.sqrt(j)) - 2)

        // block size css
        grid.style.width = `${size}px`
        grid.style.height = `${size}px`


        container.appendChild(grid)


    }



    // Hover Effect Event
    const divs = document.getElementsByClassName('div_one')

    for (let i = 0; i < divs.length; i++) {

        divs[i].addEventListener("mouseover", function (event) {


            // RGB mode functionality
            if (document.getElementById("rgb_mode").checked === true) {
                divs[i].style.backgroundColor = randomColors()
            }


            else {
                divs[i].style.backgroundColor = color.value
            }


        })


    }
}


// default grid is 16x16 px 
createGrid(256)


// function that clears the grid
function clearGrid() {

    const divs = document.getElementsByClassName('div_one')

    while (divs.length > 0) {
        container.removeChild(divs[0])
    }

}



// obtain the slider elements
const slider = document.getElementById('slider')

const slider_number = document.getElementById('slider_span')



// function updating the slider on each input, 
// while clearing the old grid and creating a new one


slider.oninput = function () {

    clearGrid()

    // outputing the grid size on the page 
    slider_number.innerHTML = `${slider.value} X ${slider.value}`;

    // j determines the size of the grid (16x16 / 32x32 / 64x64 ...)
    let j = slider.value * slider.value

    createGrid(j)

}


// associate clearGrid() to the "Clear Grid" button

const clear = document.getElementById("clear_button")

clear.onclick = function () {
    clearGrid()
}



// randomColors() returns a random RGB format color created from Math.random()

function randomColors() {

    const num1 = Math.floor(Math.random() * 255)
    const num2 = Math.floor(Math.random() * 255)
    const num3 = Math.floor(Math.random() * 255)

    return `rgb(${num1}, ${num2}, ${num3})`


}