'use strict';

function keysColor(){
    const keyColor =document.getElementsByClassName('key');
    for (let key of keyColor) {
        key.classList.add('playing')
    }
}

keysColor();

function keysColorReset(){
    const keyColor =document.getElementsByClassName('key');
    for (let key of keyColor) {
        key.classList.remove('playing')
    }
}

keysColorReset();

const keysAction = document.querySelectorAll('[deta-key="addStyle"]');

for (let kbd of keysAction){
    kbd.addEventListener('click' , evt => {
        evt.keysDefault();
        keysColor();
    });
}


const keysResetAction = document.querySelectorAll('[deta-key="resetStyle"]');

for (let kbd of keysResetAction){
    kbd.addEventListener('click' , evt => {
        evt.keysDefault();
        keysColorReset();
    });
}




