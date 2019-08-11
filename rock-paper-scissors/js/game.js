const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
const playerElements = {
    rock: document.querySelector('#rock'),
    paper: document.querySelector('#paper'),
    scissors: document.querySelector('#scissors')
};
const computerElements = {
    rock: document.querySelector('#comp-rock'),
    paper: document.querySelector('#comp-paper'),
    scissors: document.querySelector('#comp-scissors')
};
const options = Object.keys(beats);
const result = document.querySelector('#result');

function bindEvents(elements) {
    Object.keys(elements).forEach(key => {
        const element = elements[key];

        element.addEventListener('click', (ev) => {
            playRound(key);
        });
    });
}
function clearSelection(elements) {
    Object.keys(elements).forEach(key => {
        const element = elements[key];

        element.classList.remove('active');
    });
}

function selectMove(choice, elements) {
    elements[choice].classList.add('active');
}

function computerPlays() {
    const computerMove = options[Math.floor(Math.random() * options.length)];

    return computerMove;
}

function playRound(playerChoice) {
    const computerMove = computerPlays();

    clearSelection(playerElements);
    selectMove(playerChoice, playerElements);

    clearSelection(computerElements);
    selectMove(computerMove, computerElements);

    if(beats[playerChoice].includes(computerMove)){
        result.innerHTML = `
            <div class="alert alert-success">You Win! Click here to play again...</div>
        `;
    } else if(playerChoice.includes(computerMove)) {
        result.innerHTML = `
            <div class="alert alert-warning">It's a draw! Click here to play again...</div>
        `;
    } else {
        result.innerHTML = `
            <div class="alert alert-danger">Computer Wins! Click here to play again...</div>
        `;
    }
}

bindEvents(playerElements);

result.addEventListener('click', (ev) => {
    result.innerHTML = '';
    clearSelection(playerElements);
    clearSelection(computerElements);
});


