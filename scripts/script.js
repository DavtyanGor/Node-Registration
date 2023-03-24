const $ = document;
const burger = $.querySelector('.burger');
const nav = $.querySelector('.header__list');

burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    nav.classList.toggle('active-nav')
});


//////// modal registration /////

const reg = $.querySelector('.reg');
const modal = $.querySelector('.modal');
const main = $.querySelector('.main');
const fmodal = $.querySelector('.fmodal');

reg.addEventListener('click', function () {
    modal.style.top = '0%'
    $.body.style.overflow = 'hidden'
})

main.addEventListener('click', function () {
    $.body.style.overflow = 'auto'
    modal.style.top = '-2000%'
    fmodal.style.left = '-2000%'
})
///////// footer modal

const privacy = $.querySelector('.fot__policy');
privacy.addEventListener('click', () => {
    fmodal.style.left = '50%'
    fmodal.style.top = '50%'
    fmodal.style.transform = 'translate(-50%, -70%)'
})




//////////// header links

const logo = $.querySelector('.header__logo-h1');
const link1 = $.querySelector('.list-item1');
const link2 = $.querySelector('.list-item2');
const sec2 = $.querySelector('.sec2');
const sec4 = $.querySelector('.sec4');

logo.addEventListener('click', () => {
    location.reload()
})


link1.addEventListener('click', function (def) {
    def.preventDefault();
    setTimeout(function () {
        sec2.scrollIntoView({ 'block': 'center' });
    }, 100)
})
link2.addEventListener('click', function (def) {
    def.preventDefault();
    setTimeout(function () {
        sec4.scrollIntoView({ 'block': 'center' });
    }, 100)
})


/////// examination registration ///////////
const btn = $.querySelector('.btn');
pass.setAttribute('minlength', '7')
login.setAttribute('minlength', '3')

function validateEmail(email) {
    const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return val.test(email);
}


function checkCoincidences(el) {
    if (pass.value != repass.value) {
        repass.style.backgroundColor = 'darkred'
        passCheck.textContent = 'Пароли не совпадают.'
        passCheck.style.color = 'red'
        passCheck.style.marginTop = '-20px'
        passCheck.style.marginRight = '100px'
        el.preventDefault()
    } else if (pass.value.length == 0 || repass.value.length == 0) {
        repass.style.backgroundColor = 'darkred'
        pass.style.backgroundColor = 'darkred'
        passCheck.textContent = 'В поле пусто.'
        passCheck.style.color = 'red'
        passCheck.style.marginTop = '-20px'
        passCheck.style.marginRight = '100px'
        el.preventDefault()
    } else if (pass.getAttribute('minlength') != 7) {
        passCheck.textContent = 'Ты что такой умный?'
        passCheck.style.color = 'red'
        passCheck.style.marginTop = '-20px'
        passCheck.style.marginRight = '100px'
        el.preventDefault()
    }
    else {
        passCheck.textContent = ' '
    }

    /////////// name validation

    for (let i = 0; i < 10; i++) {
        if (login.value[0] == i) {
            login.style.backgroundColor = 'darkred'
            logCheck.textContent = 'Первый символ не может быть цифрой.'
            logCheck.style.color = 'red'
            logCheck.style.marginTop = '-20px'
            logCheck.style.marginBottom = '10px'
            logCheck.style.marginRight = '0px'
            el.preventDefault()
        }
        else if (login.value.length == 0) {
            login.style.backgroundColor = 'darkred'
            logCheck.textContent = 'В поле пусто.'
            logCheck.style.color = 'red'
            logCheck.style.marginTop = '-20px'
            logCheck.style.marginBottom = '10px'
            logCheck.style.marginRight = '100px'
            el.preventDefault()
        }
        else if (login.value[0] == login.value[0].toLowerCase()) {
            login.style.backgroundColor = 'darkred'
            logCheck.textContent = 'первая буква должен быть большим.'
            logCheck.style.color = 'red'
            logCheck.style.marginTop = '-20px'
            logCheck.style.marginBottom = '10px'
            logCheck.style.marginRight = '0px'
            el.preventDefault()
        }
        else if (login.getAttribute('minlength') != 3) {
            logCheck.textContent = 'Ты что такой умный?'
            el.preventDefault()
        }
        else {
            logCheck.textContent = ' '
        }
    
    };


    /////// validation email

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(validRegex)) {

        emailCheck.textContent = ''
        return true;

    } else {
        emailCheck.textContent = 'Неверный Email'
        emailCheck.style.color = 'red'
        emailCheck.style.marginTop = '-20px'
        emailCheck.style.marginBottom = '10px'
        emailCheck.style.marginRight = '100px'
        email.style.backgroundColor = 'darkred'
        el.preventDefault()
        return false;

    }

}

btn.addEventListener('click', checkCoincidences)

pass.addEventListener('input', () => { pass.style.backgroundColor = '#2B3135' })
repass.addEventListener('input', () => { repass.style.backgroundColor = '#2B3135' })
email.addEventListener('input', () => { email.style.backgroundColor = '#2B3135' })
login.addEventListener('input', () => { login.style.backgroundColor = '#2B3135' })



//////////////atropos js

const myAtropos = Atropos({
    el: '.atrop'
});
const myAtropos2 = Atropos({
    el: '.atrop2'
});
const myAtropos3 = Atropos({
    el: '.atrop3'
});
const myAtropos4 = Atropos({
    el: '.atrop4'
});
const myAtropos5 = Atropos({
    el: '.atrop5'
});
const myAtropos6 = Atropos({
    el: '.atrop6'
});