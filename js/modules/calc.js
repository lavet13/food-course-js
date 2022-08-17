function calc() {
    
    let sex, height, weight, age, ratio;

    if(localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = "female";
        localStorage.setItem('sex', sex);
    }

    if(localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', ratio);
    }

    function initLocalStorage(selector, activeSelector) {
        const elements = document.querySelectorAll(`${selector} div`);

        elements.forEach(elem => {
            elem.classList.remove(activeSelector); 

            if(elem.getAttribute('id') == localStorage.getItem('sex')) {
                elem.classList.add(activeSelector);    
            }
            if(elem.dataset.ratio == localStorage.getItem('ratio')) {
                elem.classList.add(activeSelector);
            }
        });
        
    }

    initLocalStorage('.calculating__choose_big', 'calculating__choose-item_active');
    initLocalStorage('#gender', 'calculating__choose-item_active');

    const result = document.querySelector('.calculating__result span');

    function calcTotal() {
        if(!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }

        if(sex == "female") {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parentSelector, activeSelector) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        document.querySelector(parentSelector).addEventListener('click', function(e) {
            if(e.target.dataset.ratio && e.target != this) {
                ratio = +e.target.dataset.ratio;
                console.log(ratio);
                localStorage.setItem('ratio', ratio);
            } else if(e.target.getAttribute('id') && e.target != this) {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', sex);
            }


            if(e.target != this) {
                elements.forEach(elem => {
                    elem.classList.remove(activeSelector);
                });

                e.target.classList.add(activeSelector);
            }

            calcTotal();

        });

    }

    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
    getStaticInformation('#gender', 'calculating__choose-item_active');


    function getDynamicInformation(parentSelector) {
        const input = document.querySelector(parentSelector);

        input.addEventListener('input', e => {
            if(input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = "none";
            }

            switch(e.target.getAttribute('id')) {
                case "height":
                    height = +e.target.value;
                    console.log(height);
                    break;
                case "weight":
                    weight = +e.target.value;
                    console.log(weight);
                    break;
                case "age":
                    age = +e.target.value;
                    console.log(age);
                    break;
            }

            calcTotal();
        });

        
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

export default calc;