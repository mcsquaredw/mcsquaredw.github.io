const pixels = document.querySelector('#pixels');
const feedback = document.querySelector('#feedback');
const canvas = document.querySelector('#canvas');

pixels.addEventListener('input', (ev) => {
    const numPixels = Number.parseInt(ev.target.value);
    let canvasStr = '';

    canvas.innerHTML = ``;

    if(Number.isNaN(numPixels) || numPixels < 1) {
        feedback.innerHTML = `
            <div class="alert alert-danger">You must enter a positive number for the pixels in the grid!</div>
        `;
    } else if(numPixels > 100) {
        feedback.innerHTML = `
            <div class="alert alert-danger">Too many pixels!</div>
        `;
    } else {
        const pixelSize = Math.floor(960 / numPixels);
        feedback.innerHTML = ``;

        for(let i = 0; i < numPixels; i++) {
            for(let j = 0; j < numPixels; j++) {
                canvasStr += `<div class="pixel" style="width:${pixelSize}px;height:${pixelSize}px;"></div>`
            }
        }

        canvas.innerHTML = canvasStr;
    }
});

canvas.addEventListener('mouseover', (ev) => {
    const pixel = ev.target;

    if(pixel.classList.contains('pixel')) {
        pixel.classList.add('active');  
    }
});