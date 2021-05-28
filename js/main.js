const menu = document.querySelector('.navbar');

const toggleMenu = () => {
  menu.classList.toggle('is-open')
}

document.body.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.menu-button')) {
    e.preventDefault();
    toggleMenu();
  } else if (target.closest('.close-button')) {
    e.preventDefault();
    toggleMenu();
  }
})
