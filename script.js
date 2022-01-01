let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (a,b) => {
  Math.abs(a - b);
}

const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
  if (humanGuess >= 0 && humanGuess <= 9) {
    let humanResult = getAbsoluteDistance(humanGuess - secretTargetNumber);
    let computerResult = getAbsoluteDistance(computerGuess - secretTargetNumber);
    if (humanResult > computerResult) {
      return false;
    } else if (humanResult < computerResult) {
      return true;
    } else if (humanResult === computerResult) {
      return true;
    }
  } else {
    console.log(alert('Wrong!'));
  }
}

const updateScore = winner => {
  switch(winner) {
    case 'human':
      humanScore += 1;
      break;
      case 'computer':
      computerScore += 1;
      break;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
