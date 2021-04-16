const burger = document.querySelector('.burger'),
    mobileNav = document.querySelector('.header-mobile__navigation');

    burger.addEventListener('click', ()=> {
        console.log("sdfsfsd");
        mobileNav.classList.toggle('header-mobile-nav_show');
    });