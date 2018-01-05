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

function updateButton() {
  let icon = this.paused ? '►' : '||';
  toggle.textContent = icon;
}

function updateVideoTime() {
  let skipAmount = parseInt(this.dataset.skip);
  video.currentTime += skipAmount;
}

function updateRangeVal() {
  if (this.name === 'volume') {
    video.volume = this.value;
  }
  else if (this.name === 'playbackRate') {
    video.playbackRate = this.value;
  }
}

/* Hook Up Event Listeners */
video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', toggleVideo);

skipButtons.forEach(button => button.addEventListener('click', updateVideoTime));

ranges.forEach(range => range.addEventListener('input', updateRangeVal))
