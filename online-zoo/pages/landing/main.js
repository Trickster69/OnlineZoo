const burger = document.querySelector('.burger'),
    mobileNav = document.querySelector('.header-mobile__navigation'),
    mobileHeader = document.querySelector('.header-mobile'),
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('body'),
    feedBackBtn = document.querySelector('.fifth-screen__button');

    burger.addEventListener('click', ()=> {
        mobileNav.classList.toggle('header-mobile-nav_show');
        mobileHeader.classList.toggle('header-mobile_back');
        overlay.classList.toggle('overlay_mobile');
        body.classList.toggle('body_scroll-block');

        document.querySelector('.overlay_mobile').addEventListener('click', () => {
            overlay.classList.remove('overlay_mobile');
            mobileNav.classList.remove('header-mobile-nav_show');
            mobileHeader.classList.remove('header-mobile_back');
            body.classList.remove('body_scroll-block');
            document.getElementById('checkbox').checked = false;
        });
    });

    //MODAL Feedback
    const nameFeedbackModal = document.querySelector('.feedback__name').querySelector('input'),
    emailFeedbackModal =document.querySelector('.feedback__email').querySelector('input'),
    textareaFeedbackModal =document.querySelector('.feedback__review').querySelector('textarea'),
    buttonFeedbackModal = document.querySelector('.feedback__send-button');
    var inputs = document.querySelectorAll('input[type = "email"]');

    feedBackBtn.addEventListener('click', ()=> {
        for (var i = 0;  i < inputs.length; i++) {
            inputs[i].value = '';
        }
        overlay.classList.toggle('overlay_mobile');
        body.classList.toggle('body_scroll-block');
        document.querySelector('.feedback').classList.toggle('feedback_show');
        buttonFeedbackModal.setAttribute('disabled', true);
        buttonFeedbackModal.style.background = '#D3D3D3';

        nameFeedbackModal.addEventListener('click', ()=> {
            console.log(nameFeedbackModal.value.length);
        });
        document.querySelector('.feedback').addEventListener('click', ()=> {
            if(nameFeedbackModal.value.length > 0 && emailFeedbackModal.value.length > 0 &&(textareaFeedbackModal.value.length > 0 && textareaFeedbackModal.value.length < 5)){
                
                buttonFeedbackModal.removeAttribute('disabled');
                buttonFeedbackModal.style.background = '#171717';
                buttonFeedbackModal.style.color = '#FFFFFF';

                if(textareaFeedbackModal.value.length > 5) {
                    buttonFeedbackModal.setAttribute('disabled', true);
                    buttonFeedbackModal.style.background = '#D3D3D3';
                }
            }
        });
        
        

        document.querySelector('.overlay_mobile').addEventListener('click', () => {
            overlay.classList.remove('overlay_mobile');
            mobileNav.classList.remove('header-mobile-nav_show');
            mobileHeader.classList.remove('header-mobile_back');
            body.classList.remove('body_scroll-block');     
            document.querySelector('.feedback').classList.remove('feedback_show');
            document.querySelector('.feedback__input').focus();
        });
    });



    
    