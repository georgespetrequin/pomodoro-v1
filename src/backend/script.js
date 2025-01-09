const modeText = document.getElementById('mode-text');
const toggleModeButton = document.getElementById('toggle-mode');
let timerId = null;
let timeLeft;
const WORK_TIME = 1500;
const BREAK_TIME = 300;

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    isWorkTime = true;
    timeLeft = WORK_TIME;
    modeText.textContent = 'Ready to get something done?';
    updateDisplay();
}

function startTimer() {
    if (timerId === null) {
        modeText.textContent = "Let's focus.";
        toggleModeButton.textContent = "Let's focus.";
        timeLeft = WORK_TIME;
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerId);
                timerId = null;
                setRestTime();
            }
        }, 1000);
    }
    console.log("Start Timer called");
    console.log("Mode Text Element:", modeText);
    console.log("Toggle Mode Button Element:", toggleModeButton);
}

function setRestTime() {
    isWorkTime = false;
    timeLeft = BREAK_TIME;
    modeText.textContent = 'Time to grab a tea or coffee.';
    updateDisplay();
}

function setWorkTime() {
    isWorkTime = true;
    timeLeft = WORK_TIME;
    modeText.textContent = 'Ready to get back to work?';
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
toggleModeButton.addEventListener('click', toggleMode);

resetTimer(); 