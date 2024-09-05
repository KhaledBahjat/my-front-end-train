document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const countDisplay = document.getElementById('count');

    document.getElementById('increase').addEventListener('click', () => {
        count++;
        updateDisplay();
    });
    document.getElementById('reset').addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

    function updateDisplay() {
        countDisplay.textContent = count;
    }
});
