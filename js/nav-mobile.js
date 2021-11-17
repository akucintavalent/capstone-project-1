const navMobile = document.querySelector('.nav-mobile');
const navDesktop = document.querySelector('.nav-desktop');
const closeButton = navDesktop.querySelector('.close-button');

navMobile.addEventListener('click', () => {
  navDesktop.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  navDesktop.style.display = 'none';
});
