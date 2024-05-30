document.addEventListener('DOMContentLoaded', (event) => {
    const rightEye = document.getElementById('right-eye');

    // Add the blink-animation class to start the animation after a short delay
    setTimeout(() => {
        rightEye.classList.add('blink-animation');
    }, 1000); // Delay of 1 second

    // Remove the blink-animation class after the animation ends
    rightEye.addEventListener('animationend', () => {
        rightEye.classList.remove('blink-animation');
    });
});
