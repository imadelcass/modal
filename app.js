const btnModal = document.querySelector('.btn-modal');
const btnExit = document.querySelector('.btn-exit');
const title = document.querySelector('.title');
const wrapper = document.querySelector('#wrapper');


btnModal.addEventListener('click', () => {
    btnModal.style.display = 'none';
    title.textContent = 'Modal Content';
    title.style.fontSize = '30px';
    btnExit.style.display = 'initial';
    wrapper.style.display = 'none';
})
btnExit.addEventListener('click', () => {
    btnModal.style.display = 'initial';
    btnExit.style.display = 'none';
    title.textContent = 'Model Project';
    title.style.fontSize = '60px';
})