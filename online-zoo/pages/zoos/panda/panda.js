const burger = document.querySelector('.burger'),
    mobileNav = document.querySelector('.header-mobile__navigation');

    burger.addEventListener('click', ()=> {
        mobileNav.classList.toggle('header-mobile-nav_show');
    });