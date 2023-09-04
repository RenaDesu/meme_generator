const form = document.querySelector('[data-form]');
export const uploadImage = document.querySelector('[data-upload]');
export const modal = document.querySelector('[data-modal]');

function openModal() {
    modal.classList.remove('modal--closed');
}

uploadImage.addEventListener('change', openModal);

form.addEventListener('submit', (e) => {
    e.preventDefault();
});