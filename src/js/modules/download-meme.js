import {
    canvas
} from "./create-meme";

const downloadBtn = document.querySelector('[data-download]');

const url = canvas.toDataURL('image/jpeg', 1.0);

downloadBtn.addEventListener('click', (e) => {
    downloadBtn.download = "download.JPG";
    downloadBtn.href = `${url}`;
});