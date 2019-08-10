const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

function computerPlays() {
    const options = Object.keys(beats);
    const computerMove = options[Math.floor(Math.random() * options.length)];

    return computerMove;
}

function playRound(ev) {
    const { id } = event.target;
    const computerMove = computerPlays();

    if(beats[id].includes(computerMove)){
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}