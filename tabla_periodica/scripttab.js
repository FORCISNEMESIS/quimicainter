const hydrogen = document.getElementById('hydrogen');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

hydrogen.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});