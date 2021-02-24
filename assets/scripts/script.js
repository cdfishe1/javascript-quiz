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
let choice1Answer;



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
    choice1: {answer1: 'const array = {1,2,3}', correct: false,},
    choice2: {answer2: 'const array = [1,2,3]', correct: true,},
    choice3: {answer3: 'const array = (1,2,3)', correct: false,},
    choice4: {answer4: 'const array = <1,2,3>', correct: false,},
    
    
};

const question2 = {
    question: 'What is the value passed when clicking "cancel" in a Confirm Box?',
    choice1: {answer1: 'true', correct: false,},
    choice2: {answer2: 'null', correct: false,},
    choice3: {answer3: 'false', correct: true,},
    choice4: {answer4: 'NaN', correct: false,},
    
};

const question3 = {
    question: 'Which array method adds an element to the end of an array?',
    choice1: {answer1: '.pull', correct: false,},
    choice2: {answer2: '.push', correct: true,},
    choice3: {answer3: '.pop', correct: false,},
    choice4: {answer4: '.shift', correct: false,},
    
};

//Array of all questions
const questionsArray = [question1, question2, question3];


const generateQuestions = () => {
    let i = Math.floor(Math.random() * questionsArray.length);

    currentQuestion = questionsArray[i];

    mainHead.innerHTML = questionsArray[i].question;

    quizChoice1.innerHTML = questionsArray[i].choice1.answer1;
    quizChoice1.setAttribute('data-correct', currentQuestion.choice1.correct);

    quizChoice2.innerHTML = questionsArray[i].choice2.answer2;
    quizChoice2.setAttribute('data-correct', currentQuestion.choice2.correct);

    quizChoice3.innerHTML = questionsArray[i].choice3.answer3;
    quizChoice3.setAttribute('data-correct', currentQuestion.choice3.correct);

    quizChoice4.innerHTML = questionsArray[i].choice4.answer4;
    quizChoice4.setAttribute('data-correct', currentQuestion.choice4.correct);

    questionsArray.splice(i, 1);

    quizChoice1.addEventListener('click', function() {
        console.log(quizChoice1.dataset.correct);
        if (quizChoice1.dataset.correct === false) {
            answer.innerHTML = 'Incorrect';
        } else {
            answer.innerHTML = 'That is correct!';
        }
    });
    
};

