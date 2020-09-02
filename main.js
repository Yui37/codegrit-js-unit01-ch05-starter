function addRedFrame(e) {
    const elements =document.querySelector(`.key,[data-key = KeyboardEvent.code]`);
    // KeyboardEvent.code();
    for (let  of elements ){
        kbd.classList.add('playing');
    };
    // 押されたキーボード番号を取得する　使う技法　event.keyCode DOM
    // 押されたキーボードにはクラス属性playingを付与する。 classList.add('playing')
}
window.addEventListener('keydown', addRedFrame);

// function sound(){
//     document.getElementsByTagName(audio);
//     if(keydown){}
// }
// sound();

// const keysResetAction = document.querySelectorAll('[deta-key="resetStyle"]');

// for (let kbd of keysResetAction){
//     kbd.addEventListener('click' , evt => {
//         evt.keysDefault();
//         keysColorReset();
//     });
// }




