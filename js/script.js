window.addEventListener('DOMContentLoaded', () => {

    // Tabs
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();

    // Timer

    // Modal

    // Используем классы для создание карточек меню

    

    // class HttpError extends Error {
    //     constructor(response) {
    //         super(`Could not fetch ${response.url}, status: ${response.status}`);
    //         this.name = "HttpError";
    //         this.response = response;
    //     }
    // }

    // const getResource = async (url) => {
    //     const res = await fetch(url);

    //     if(!res.ok) {
    //        throw new HttpError(res);
    //     }

    //     return await res.json();
    // };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     }); 


    










    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
            
    //         element.classList.add('menu__item');

    //         element.innerHTML += `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price * 27}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }


    // Forms


    
    // Slider


    // showSlides();

    // function showSlides() {
    //     // if(n > slides.length || n < 1) {
    //     //     // error
    //     // } else {
    //     //     // success
    //     // }




    //     // int num = 1;
    //     //   if(num > 4 || num < 1) {
    //     //     std::cout << "error!\n";    
    //     //   } else {
    //     //     std::cout << "true!\n";    
    //     //   }
    
    //     // if(num <= 4 && num >= 1) {
    //     //     std::cout << "true!\n";    
    //     //   } else {
    //     //     std::cout << "error!\n";    
    //     // }





    //     if(slideIndex > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if(slideIndex < 1) {
    //         slideIndex = slides.length; 
    //     }

    //     slides.forEach(slide => slide.classList.add('hide'));

    //     slides[slideIndex - 1].classList.add('show');
    //     slides[slideIndex - 1].classList.remove('hide');

    //     current.textContent = getZero(slideIndex);

    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });





    // Calc


});