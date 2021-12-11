const board = document.querySelector('.container'),
    colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#866e97', '#f86e97', '#f8e05a', '#0c4429'],
    SQUARES_NUMBER = 1056;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}