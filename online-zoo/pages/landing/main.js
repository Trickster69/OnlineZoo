const burger = document.querySelector('.burger'),
    mobileNav = document.querySelector('.header-mobile__navigation'),
    mobileHeader = document.querySelector('.header-mobile'),
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('body'),
    feedBackBtn = document.querySelector('.fifth-screen__button');
    
    //Show-hidden mobile menu
    function menuMobileToggle() {
        mobileNav.classList.toggle('header-mobile-nav_show');
        mobileHeader.classList.toggle('header-mobile_back');
    }

    //Show-hidden overlay ond overflow;
    function overlayToggle() {
        overlay.classList.toggle('overlay_mobile');
        body.classList.toggle('body_scroll-block');
    }

    
    burger.addEventListener('click', ()=> {
        menuMobileToggle();
        overlayToggle();
    });

    //click overlay
    document.querySelector('.overlay').addEventListener('click', () => {
        if(document.getElementById('checkbox').checked == true){
            menuMobileToggle();
            overlayToggle();            
            document.getElementById('checkbox').checked = false;
        }
       
    });

    
    //**************        MODAL        *******************//
    const modalFeedback = document.querySelector('.feedback'),
        formFeedback = document.querySelector('#feedback__form'),
        nameInput = document.querySelector('.feedback__name').querySelector('input'),
        emailInput = document.querySelector('.feedback__email').querySelector('input'),
        modalTextarea = document.querySelector('.feedback__review').querySelector('textarea'),
        modalFields = document.querySelectorAll('#input'),
        sendModalButton = document.querySelector('.feedback__send-button'),
        feedbackButton = document.querySelector('.fifth-screen__button'),
        mobileCloseBtn = document.querySelector('.feedback_close');

    //Close modal function
    function closeModal () {
        overlay.classList.remove('overlay_mobile');
        body.classList.remove('body_scroll-block');
        document.querySelector('.feedback').classList.remove('feedback_show'); 
        formFeedback.reset();
        sendModalButton.style.background = '#D3D3D3';
        sendModalButton.setAttribute('disabled', 'disabled');
    }

    //Check inputs function    
    function checkInputValue() {
        const textareaValue = modalTextarea.value;

        if(nameInput.validity.valid && emailInput.validity.valid && (textareaValue.length != 0 && textareaValue.length < 280)) {
            sendModalButton.removeAttribute('disabled');
            sendModalButton.style.background = '#0F0049';
        } else {
            sendModalButton.style.background = '#D3D3D3';
            sendModalButton.setAttribute('disabled', 'disabled');
        }
    }
    modalFields.forEach(field => {
        field.addEventListener('keyup', ()=> {
            checkInputValue();
        });
    });

    //Show modal
    feedbackButton.addEventListener('click', () => {
        modalFields.forEach(field => field.value = "");
        modalFeedback.classList.add('feedback_show');
        overlay.classList.add('overlay_mobile');
        body.classList.add('body_scroll-block');
    }); 

    //Close modal to click on overlay    
    overlay.addEventListener('click', () => {
        if(modalFeedback.classList.contains('feedback_show')){
            closeModal();
        }
    });

    //Close form to ESC    
    document.addEventListener('keydown', (e)=> {
        if (e.code === 'Escape' && modalFeedback.classList.contains('feedback_show')) {
            closeModal();   
        }
    });

    //Close form to X 
    mobileCloseBtn. addEventListener('click', ()=> {
        closeModal();
    });

    //Send form
    formFeedback.addEventListener('submit', (e)=> {
        e.preventDefault();
        alert(`Thanks for your feedback, ${nameInput.value}!`);
        closeModal();
    });


    //**************       MAP       *******************//
    const markers = document.querySelectorAll('.map-animal-icons__marker'),
    map = document.querySelector('.sixth-screen__map'),
    mapCards = document.querySelectorAll('.map-card'),
    mobileAsideMap = document.querySelectorAll('.aside__animal-item');

    function showMapCard(id){
        mapCards.forEach(mapCard => {
            if(mapCard.classList.contains(id)){
                mapCards.forEach(Card => {
                    Card.classList.remove('show_map-card');
                    // Card.classList.remove('hide_map-card');
                });
                mapCard.classList.add('show_map-card');
            }
        });
    }

    mobileAsideMap.forEach(mobileAsideElement => {
        mobileAsideElement.addEventListener('click', (e)=> {
            mobileAsideMap.forEach(elem => {
                elem.classList.remove('acide_active'); 
                elem.classList.add('acide_disable');
            }); 

            if(mobileAsideElement.id == e.target.id){
                mobileAsideElement.classList.remove('acide_disable');
                mobileAsideElement.classList.add('acide_active');
            }
            
            showMapCard(e.target.id);
        });
    });

    
    map.addEventListener('click', (e) => {
        if (e.target.classList.contains('map-animal-icon__border') || 
        e.target.classList.contains('map-animal-icons__item') || 
        e.target.classList.contains('map-animal-icons_piece')) {
            
            markers.forEach(marker => {
                marker.classList.remove('marker_active');
                let id = e.target.id;

                if(marker.classList.contains(id)) {
                    marker.classList.add('marker_active');
                }
                showMapCard(id);
            });

        } else {
            // markers.forEach(marker => {
            //     marker.classList.remove('marker_active');
                
            // });  
            
            // mapCards.forEach(card => {
            //     card.classList.add('hide_map-card');
            // });
            return;
        }
    });



   
/*          SLIDER           */

let position = 0;
const slidesToShow = 3;

const sliderWrapper = document.querySelector('.third-screen__slider-wrapper'),
    sliderTrack = document.querySelector('.third-screen__slider-track'),
    sliderItems = document.querySelectorAll('.third-screen__slide'),    
    BtnTrirdPrev = document.querySelector('.third-screen__slider-left'),
    BtnTrirdNext = document.querySelector('.third-screen__slider-right'),
    trackgap = window.getComputedStyle(sliderTrack).columnGap,
    itemWidth = document.querySelector('.third-screen__slide').clientWidth; //ширина каждого элемента
    let arraySlide = [...document.querySelectorAll('.third-screen__slide')];
    
    // const itemWidth = sliderWrapper.clientWidth / slidesToShow - 37; 

function moveSlide(element, position) {
    element.style.transform = `translateX(${position}px)`;
}

const movePosition = itemWidth + parseInt(trackgap); //на сколько сдвигаем

let isEnabled = true;

sliderItems.forEach(item => {
    item.style.maxWidth = `${itemWidth}px`;
});


BtnTrirdPrev.addEventListener('click', () => {    
    position += movePosition;
    // const dupNode = arraySlide[Math.floor(Math.random() * 8)].cloneNode(true);
    // sliderTrack.insertBefore(dupNode, sliderTrack.firstElementChild);
    
    if (position > 0) {
        position = -movePosition * (sliderItems.length - slidesToShow);        
    }

    moveSlide(sliderTrack, position);
});

BtnTrirdNext.addEventListener('click', () => {    
    position -= movePosition;

    // var dupNode = arraySlide[Math.floor(Math.random() * 8)].cloneNode(true);
    // sliderTrack.appendChild(dupNode);

    if (position <  -movePosition * (sliderItems.length - slidesToShow)) {
        position = 0;        
    }
    moveSlide(sliderTrack, position);
});


/*      TIMER SLIDER        */
let positionTimerSlider = 0;
const containerTimerSlider = document.querySelector('.fifth-screen__slider-container'),
trackTimerSlider = document.querySelector('.fifth-screen__slider-track'),
itemsTimerSlider = document.querySelectorAll('.review-card'),
nextBtnTimerSlider = document.querySelector('.fifth-slider_right'),
prevBtnTimerSlider = document.querySelector('.fifth-slider_left'),
itemWidthTimerSlider = document.querySelector('.review-card').clientWidth,
sliderBtnsTimerSlider = document.querySelectorAll('#fifth-screen__sliders-btn'),
trackGapTimer = window.getComputedStyle(trackTimerSlider).columnGap;

const movePositionTimerSlider  = itemWidthTimerSlider + parseInt(trackGapTimer);

function moveTimerSlide () {
    positionTimerSlider -= movePositionTimerSlider;
    
    if (positionTimerSlider <  -movePositionTimerSlider * (itemsTimerSlider.length - 2)) {
        positionTimerSlider = 0;        
    }
    moveSlide(trackTimerSlider, positionTimerSlider);
} //движение слайдера вперед функция

prevBtnTimerSlider.addEventListener('click', () => {  
    positionTimerSlider += movePositionTimerSlider;   
    
    if (positionTimerSlider > 0) {
        positionTimerSlider = -movePositionTimerSlider * (itemsTimerSlider.length - 2);        
    }

    moveSlide(trackTimerSlider, positionTimerSlider);
}); 

nextBtnTimerSlider.addEventListener('click', () => {     
    moveTimerSlide();
}); 


//автоматическая прокрутка трека
let autoSlideInterval = null;
function goSlide (){
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(moveTimerSlide, 10000);    
}
goSlide();

//Функция паузы при нажатии на элемент;
function pauseSlider (elements, pause = 10000) {
    elements.forEach(item => {
        item.addEventListener('click', ()=> {
            clearInterval(autoSlideInterval);
            setTimeout(goSlide, pause);
        });
    });
} 

pauseSlider (itemsTimerSlider);
pauseSlider (sliderBtnsTimerSlider);



