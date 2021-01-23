const h3 = document.querySelector('h3');
const form = document.querySelector('form');
const expression = document.getElementById('expression')
const buttons = document.querySelectorAll('button');

for(let i=0; i<buttons.length-1; i++) {
    buttons[i].addEventListener('click', assign);
}

function assign(e) {
    e.preventDefault();
    if(e.target.textContent == 'C') {
        expression.value = '';
        if(!h3.classList.contains('pDisplay')) {
            h3.classList.add('pDisplay');
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
        expression.value = eval(expression.value);
    }
    catch(err) {
        h3.classList.remove('pDisplay');
    }
}
