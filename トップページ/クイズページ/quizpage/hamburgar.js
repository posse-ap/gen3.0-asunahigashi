'use strict';

{
  const header = document.getElementById('js-header');
  const headerButton = document.getElementById('js-headerButton');
  const headerMenu = document.querySelector('.js-header-menu');
  const  headerNavList = document.querySelector('.js-header-nav-list');

  headerButton.addEventListener('click', () => {
    header.classList.toggle('active');
    headerNavList.classList.toggle('is-open');
    headerMenu.classList.toggle('is-open');
  })
}
