/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build Functions */
function toggleVideo() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  let icon = this.paused ? '►' : '||';
  toggle.textContent = icon;
}

function updateVideoTime() {
  let skipAmount = parseInt(this.dataset.skip);
  video.currentTime += skipAmount;
}

function handleRangeVal() {
  let targetProperty = this.name;
  video[targetProperty] = this.value;
}

function handleProgressBar() {
  let progress = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

/* Hook Up Event Listeners */

video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgressBar);

toggle.addEventListener('click', toggleVideo);

skipButtons.forEach(button => button.addEventListener('click', updateVideoTime));

ranges.forEach(range => range.addEventListener('input', handleRangeVal))
