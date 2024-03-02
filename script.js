function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.querySelector('.hour').textContent = formatTime(hours);
    document.querySelector('.min').textContent = formatTime(minutes);
    document.querySelector('.sec').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(updateClock, 1000);

updateClock();
