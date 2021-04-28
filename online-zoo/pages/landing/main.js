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
                mapCards.forEach(Card => Card.classList.remove('show_map-card'))
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
                console.log('sdfsdf');
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
            markers.forEach(marker => {
                marker.classList.remove('marker_active');
            });            
        }
    });



   



    

     
        

    


    
    