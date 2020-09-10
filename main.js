function addEffects(e){
    const redFrame = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    redFrame.classList.add('playing');
    const sounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    sounds.play();
}
window.addEventListener('keydown', addEffects);

function removeEffects(e){
    const resetRedFrame = document.querySelector(`div.key.playing[data-key="${e.keyCode}"]`);
    resetRedFrame.classList.remove('playing');
    const resetSounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    resetSounds.pause();
}
window.addEventListener('keyup', removeEffects);