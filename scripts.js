/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Create Functions */

function toggleVideo() {
  video.paused ? video.play() : video.pause();
}

function renderPauseSymbol() {
  toggle.textContent = '||';
}

/* Hook Up Event Listeners */

video.addEventListener('click', toggleVideo)
video.addEventListener('pause', renderPauseSymbol)

toggle.addEventListener('click', toggleVideo)
