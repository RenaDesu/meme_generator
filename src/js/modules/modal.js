const form = document.querySelector('[data-form]');
export const uploadImage = document.querySelector('[data-upload]');
const modal = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('[data-close]');

function openModal() {
    modal.classList.remove('modal--closed');
}

function onModalClose() {
    modal.classList.add('modal--closed');
    form.reset();
}

uploadImage.addEventListener('change', openModal);

closeBtn.addEventListener('click', onModalClose);

form.addEventListener('submit', (e) => {
    e.preventDefault();
});