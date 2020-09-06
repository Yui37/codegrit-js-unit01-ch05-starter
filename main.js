function addRedFrame(e) {
    const elements =document.querySelector(`.key,[data-key = "${event.keyCode}"]`);
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
