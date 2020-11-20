let currentImage = 0

let getImageWidths = ()=> {
    let images = document.getElementsByClassName('image-frame')
    let widths = []
    for (let i = 0; i < images.length; i += 1) {
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

let nextImage = () => {
    currentImage = (currentImage + 1) % imageWidths.length
    carouselSwitchImage(currentImage)
}

let previousImage = () => {
    if (currentImage === 0) {
        currentImage = imageWidths.length - 1
    } else {
        currentImage -= 1
    }
    carouselSwitchImage(currentImage)
}

let setSelectedDot = (i) => {
    let dotsContainer = document.getElementById('dots')
    let dots = dotsContainer.getElementsByTagName('button')
    for (let button of dots) {
        button.innerHTML = "&#9675;"
    }
    dots[i].innerHTML = "&#9679;"
}

let imageWidths = getImageWidths()
let imageOffsets = getImageOffsets(imageWidths)

let carousel = document.getElementById('carousel')
carousel.addEventListener('click', (e) => {
    let width = e.currentTarget.clientWidth
    let x = e.pageX - e.currentTarget.offsetLeft
    if (width/2 > x) {
        previousImage()
    } else {
        nextImage()
    }
})

function carouselSwitchImage (i) {
    let slider = document.getElementById('image-slider')
    currentImage = i
    setSelectedDot(i)
    slider.style.left = imageOffsets[i] + 'px'
}

for (let i = 0; i < imageOffsets.length; i += 1) {
    let dots = document.getElementById('dots')
    let button = document.createElement('button')
    button.innerHTML = 	"&#9675;"
    let offset = imageOffsets[i]
    button.addEventListener('click', () => {carouselSwitchImage(i)})
    dots.appendChild(button)
}
carouselSwitchImage(0)
window.setInterval(nextImage, 5000)
