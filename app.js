const h3 = document.querySelector('h3');
const form = document.querySelector('form');
const expression = document.getElementById('expression')
const buttons = document.querySelectorAll('.wrapper button');
const history = document.querySelector('.history');

for(let i=0; i<buttons.length-1; i++) {
    buttons[i].addEventListener('click', assign);
}

function assign(e) {
    e.preventDefault();
    if(e.target.textContent == 'C') {
        expression.value = '';
        if(!h3.classList.contains('invalid')) {
            h3.classList.add('invalid');
        }
    }
    else if(e.target.id == 'backspace') {
        expression.value = expression.value.substring(0, expression.value.length-1);
        if(!h3.classList.contains('invalid')) {
            h3.classList.add('invalid');
        }
    }
    else {
        expression.value += e.target.textContent;
    }
}

form.addEventListener('submit', calculate);

function calculate(e) {
    e.preventDefault();
    try {
        let result = eval(expression.value);
        let html = `<p class="h">${expression.value} = ${result}</p>`
        history.innerHTML += html;
        expression.value = result;    
    }
    catch(err) {
        h3.classList.remove('invalid');
    }
}

history.addEventListener('click', clear);

function clear(e) {
    if(e.target.tagName === 'BUTTON') {
        history.querySelectorAll('.h').forEach(p => p.remove());
    }
}
