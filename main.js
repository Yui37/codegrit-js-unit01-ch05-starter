function addRedFrameAndSound(e){
    const RedFrame = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    RedFrame.classList.add('playing');
    const sounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    sounds.play();
}
   // 押されたキーボード番号を取得する　使う技法　event.keyCode DOM
    // 押されたキーボードにはクラス属性playingを付与する。 classList.add('playing')
    //押されたキーボードの番号を取得　e.keyCode
    //キーボードごとに設定された音が鳴る
window.addEventListener('keydown', addRedFrameAndSound);

function resetRedFrameAndSound(e){
    const resetRedFrame = document.querySelector(`.key.playing[data-key="${e.keyCode}"]`);
    resetRedFrame.classList.remove('playing');
    const resetSounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    resetSounds.pause();
}

window.addEventListener('keyup', resetRedFrameAndSound);