let getImageWidths = ()=> {
    let images = document.getElementsByClassName('image-frame')
    console.log(images.length)
    let widths = []
    for (let i = 0; i < images.length; i += 1) {
        console.log(i)
        console.log(images[i].offsetWidth)
        widths[i] = images[i].offsetWidth
    }
    return widths
}

let getImageOffsets = (widths)=> {
    let offsets = []
    for (let i = 0; i < widths.length; i += 1) {
        if (i === 0) {
            offsets[i] = 0
        } else {
            offsets[i] = (-1 * widths[i]) + offsets[i - 1]
        }
    }
    return offsets
}

let imageWidths = getImageWidths()
let imageOffsets = getImageOffsets(imageWidths)

let carousel = document.getElementById('carousel')
let dots = document.getElementById('dots')


function carouselButtonClick (i) {
    let slider = document.getElementById('image-slider')
    console.log(imageOffsets[i])
    slider.style.left = imageOffsets[i] + 'px'
}

for (let i = 0; i < imageOffsets.length; i += 1) {
    let button = document.createElement('button')
    button.textContent = `${i + 1}`
    let offset = imageOffsets[i]
    button.addEventListener('click', () => {carouselButtonClick(i)})
    dots.appendChild(button)
}
