import {
    uploadImage
} from './modal';
// import {
//     downloadMeme
// } from './download-meme';

const memeText = document.querySelector('[data-text]');
const memePosTop = document.querySelector('[data-position-top]');
const memePosBottom = document.querySelector('[data-position-bottom]');
const memeTextSize = document.querySelector('[data-size]');
const memeTextColor = document.querySelector('[data-color]');
export const canvas = document.querySelector('#meme');

let image;

let isTop = true;

uploadImage.addEventListener('change', createImageForCanvas);

memeTextSize.addEventListener('change', (e) => {
    const min = memeTextSize.min;
    const max = memeTextSize.max;
    const value = memeTextSize.value;
    if (value > max) {
        memeTextSize.value = max
    } else if (value < min) {
        memeTextSize.value = min
    }

    updateCanvas(canvas, image, memeText.value, memeTextSize.value, memeTextColor.value);
});

memeTextColor.addEventListener('change', () => {
    updateCanvas(canvas, image, memeText.value, memeTextSize.value, memeTextColor.value);
});

memeText.addEventListener('change', () => {
    updateCanvas(canvas, image, memeText.value, memeTextSize.value, memeTextColor.value);
});

memePosTop.addEventListener('click', () => {
    isTop = true;
    updateCanvas(canvas, image, memeText.value, memeTextSize.value, memeTextColor.value);
});

memePosBottom.addEventListener('click', () => {
    isTop = false;
    updateCanvas(canvas, image, memeText.value, memeTextSize.value, memeTextColor.value);
});

function updateCanvas(canvas, image, text, size, color) {
    const ctx = canvas.getContext('2d');
    const width = image.width;
    const height = image.height;
    const fontSize = size;
    const yOffset = height / 25;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0);

    ctx.fillStyle = `${color}`;
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
    ctx.font = `${fontSize * 2}px sans-serif`;


    if (isTop) {
        ctx.textBaseline = 'top';
        ctx.fillText(text, width / 2, yOffset);
    } else {
        ctx.textBaseline = 'bottom';
        ctx.fillText(text, width / 2, height - yOffset);
    }
}

function createImageForCanvas() {
    const imageDataUrl = URL.createObjectURL(uploadImage.files[0]);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener('load', () => {
        updateCanvas(canvas, image, memeText.value, memeTextSize.value, memeTextColor.value);
    }, {
        once: true
    });
}