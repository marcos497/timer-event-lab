let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('hours').innerText = padZero(hours);
  document.getElementById('minutes').innerText = padZero(minutes);
  document.getElementById('seconds').innerText = padZero(seconds);
}

function padZero(value) {
  return value < 10 ? '0' + value : value;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
