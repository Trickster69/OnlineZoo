const othersCamsBtn = document.querySelector('.second-screen__button'),
details = document.querySelectorAll('.accordeon-item__panel'),
    videos = document.querySelectorAll('.second-screen__frame-item'),
    mainVideo = document.querySelector('#hero_main-video');

othersCamsBtn.addEventListener('click', () => {
    
    document.querySelector('.second-screen__content').classList.toggle('second-screen-content_show-hidden');
    document.querySelector('.second-screen__btn-arrow-img').style.transform = "";
    document.querySelector('.second-screen__btn-arrow-img').classList.toggle('btn_rotate');
});

details.forEach(key => {
    key.addEventListener('click', ()=> {
        if(!key.hasAttribute('open')) {
            key.style.borderBottom = '1px solid #609FFF';
        }else {
            key.style.borderBottom = '1px solid #D3D3D3';
        }
    });
});

videos.forEach(key => {
    key.addEventListener('click', ()=> {
        let newMain = key.querySelector('iframe').src;
        key.querySelector('iframe').src = mainVideo.src;
        mainVideo.src = newMain;
    });
});