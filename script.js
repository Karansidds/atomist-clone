document.addEventListener('DOMContentLoaded', () => {
  // NAVBAR
  let dismiss = document.querySelector('#dismiss');
  let full_nav = document.querySelector('.fullscreen-nav');
  let nav_btn = document.querySelector('.nav-menu');
  let navbar = document.querySelector('.navbar');
  let tick = document.querySelector('audio');

  nav_btn.addEventListener('click', () => {
    nav_btn.classList.add('d-none');
    full_nav.classList.remove('d-none');
    navbar.classList.add('d-none');
    tick.play();
  })

  dismiss.addEventListener('click', () => {
    full_nav.classList.add('d-none');
    navbar.classList.remove('d-none');
    nav_btn.classList.remove('d-none');
    tick.play();
  })

  // DARK MODE
  let dark_icon = document.querySelector('.dark-icon');
  let dark_icon_img = document.querySelector('.dark_icon_img');
  let body = document.querySelector('body');

  dark_icon.addEventListener('click', () => {
    if (dark_icon_img.src.includes('moon')) {
      dark_icon_img.src = "./images/sun.png";
      body.classList.add('dark-mode');
    } else if (dark_icon_img.src.includes('sun')) {
      dark_icon_img.src = "./images/moon.png";
      body.classList.remove('dark-mode');
    }
  })
})