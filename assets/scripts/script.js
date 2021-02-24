//Variables


const mainHead = document.querySelector('h1');
const quizChoice1 = document.getElementById('choice1');
const quizChoice2 = document.getElementById('choice2');
const quizChoice3 = document.getElementById('choice3');
const quizChoice4 = document.getElementById('choice4');
const quizAnswer = document.getElementById('answer');
const choiceButtons = document.querySelector('ul');
const explain = document.getElementById('gameExplanation');
const startGameButton = document.getElementById('startGame');
const answer = document.getElementById('answer');
const choiceArray = [quizChoice1, quizChoice2, quizChoice3, quizChoice4];
let currentQuestion;



//Introduction to the game with button to begin
mainHead.innerHTML = 'Coding Quiz Challenge';
explain.innerHTML = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.';
startGameButton.innerHTML = 'Start Game';

//Start the Game
const startGame = () => {
    choiceButtons.style.display = 'initial';
    startGameButton.style.display = 'none';
    explain.style.display = 'none';
    generateQuestions();
};

startGameButton.addEventListener('click', startGame);

//The set of questions
const question1 = {
    question: 'How do you construct an array in Javascript?',
    choice1: {answer1: 'const array = {1,2,3}', response: 'false',},
    choice2: {answer2: 'const array = [1,2,3]', response: 'true',},
    choice3: {answer3: 'const array = (1,2,3)', response: 'false',},
    choice4: {answer4: 'const array = <1,2,3>', response: 'false',},
    
    
};

const question2 = {
    question: 'What is the value passed when clicking "cancel" in a Confirm Box?',
    choice1: {answer1: 'true', response: 'false',},
    choice2: {answer2: 'null', response: 'false',},
    choice3: {answer3: 'false', response: 'true',},
    choice4: {answer4: 'NaN', response: 'false',},
    
};

const question3 = {
    question: 'Which array method adds an element to the end of an array?',
    choice1: {answer1: '.pull', response: 'false',},
    choice2: {answer2: '.push', response: 'true',},
    choice3: {answer3: '.pop', response: 'false',},
    choice4: {answer4: '.shift', response: 'false',},
    
};

//Array of all questions
const questionsArray = [question1, question2, question3];


const generateQuestions = () => {
    let i = Math.floor(Math.random() * questionsArray.length);

    currentQuestion = questionsArray[i];

    mainHead.innerHTML = questionsArray[i].question;

    quizChoice1.innerHTML = questionsArray[i].choice1.answer1;
    quizChoice1.setAttribute('data-response', currentQuestion.choice1.response);

    quizChoice2.innerHTML = questionsArray[i].choice2.answer2;
    quizChoice2.setAttribute('data-response', currentQuestion.choice2.response);

    quizChoice3.innerHTML = questionsArray[i].choice3.answer3;
    quizChoice3.setAttribute('data-response', currentQuestion.choice3.response);

    quizChoice4.innerHTML = questionsArray[i].choice4.answer4;
    quizChoice4.setAttribute('data-response', currentQuestion.choice4.response);

    questionsArray.splice(i, 1);

    
};

quizChoice1.addEventListener('click', function() {
    if (quizChoice1.dataset.response === 'false') {
        answer.innerHTML = 'Incorrect';
    } else {
        answer.innerHTML = 'That is correct!';
    }
});

quizChoice2.addEventListener('click', function() {
    if (quizChoice2.dataset.response === 'false') {
        answer.innerHTML = 'Incorrect';
    } else {
        answer.innerHTML = 'That is correct!';
    }
});

quizChoice3.addEventListener('click', function() {
    if (quizChoice3.dataset.response === 'false') {
        answer.innerHTML = 'Incorrect';
    } else {
        answer.innerHTML = 'That is correct!';
    }
});

quizChoice4.addEventListener('click', function() {
    if (quizChoice4.dataset.response === 'false') {
        answer.innerHTML = 'That is incorrect.';
    } else {
        answer.innerHTML = 'That is correct!';
    }
});

