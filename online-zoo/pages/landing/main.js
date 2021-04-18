const burger = document.querySelector('.burger'),
    mobileNav = document.querySelector('.header-mobile__navigation'),
    mobileHeader = document.querySelector('.header-mobile');

    burger.addEventListener('click', ()=> {
        console.log("sdfsfsd");
        mobileNav.classList.toggle('header-mobile-nav_show');
        mobileHeader.classList.toggle('header-mobile_back');
    });