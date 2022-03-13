    import tabs  from './modules/tabs';
    import modal  from './modules/modal';
    import timer  from './modules/timer';
    import cards  from './modules/cards';
    import calc  from './modules/calc';
    import forms  from './modules/forms';
    import slider  from './modules/slider';

    import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {          

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs({
        tabsSelector: '.tabheader__item',
        tabsContentSelector: '.tabcontent',
        tabsParentSelector: '.tabheader__items',
        activeClass: 'tabheader__item_active'
    });

    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-12-16');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

    

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


});