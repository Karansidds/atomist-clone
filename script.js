document.addEventListener('DOMContentLoaded', () => {
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
})