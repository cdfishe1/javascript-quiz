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
const time = document.getElementById('countDown')
const choiceArray = [quizChoice1, quizChoice2, quizChoice3, quizChoice4];

let currentQuestion;
let timeLeft = 60;
time.innerHTML = timeLeft;


//Introduction to the game with button to begin
mainHead.innerHTML = 'Coding Quiz Challenge';
explain.innerHTML = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.';
startGameButton.innerHTML = 'Start Game';

//Start the Game
const startGame = () => {
    choiceButtons.style.display = 'initial';
    startGameButton.style.display = 'none';
    explain.style.display = 'none';
    timer();
    generateQuestions();
};

//Timer
const timer = () => {
    let timerInterval = setInterval(function() {
        timeLeft--;
        time.innerHTML = timeLeft;
    
        if(timeLeft <= 0) {
          clearInterval(timerInterval);
          // Calls function to create and append image
          alert('Time up!');
        }
    
      }, 1000);
};

startGameButton.addEventListener('click', startGame);

//The set of questions
const question1 = {
    question: 'How do you construct an array in Javascript?',
    choice1: {answer1: '{1,2,3}', response: 'false',},
    choice2: {answer2: '[1,2,3]', response: 'true',},
    choice3: {answer3: '(1,2,3)', response: 'false',},
    choice4: {answer4: '<1,2,3>', response: 'false',},
    
    
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
    choice1: {answer1: 'pull', response: 'false',},
    choice2: {answer2: 'push', response: 'true',},
    choice3: {answer3: 'pop', response: 'false',},
    choice4: {answer4: 'shift', response: 'false',},
    
};

const question4 = {
    question: 'What unit measures font size relative to the root element?',
    choice1: {answer1: 'px', response: 'false',},
    choice2: {answer2: 'vh', response: 'false',},
    choice3: {answer3: 'em', response: 'false',},
    choice4: {answer4: 'rem', response: 'true',},
    
};

const question5 = {
    question: 'Which display property removes an element out of the normal flow of the document?',
    choice1: {answer1: 'relative', response: 'false',},
    choice2: {answer2: 'sticky', response: 'false',},
    choice3: {answer3: 'absolute', response: 'true',},
    choice4: {answer4: 'static', response: 'false',},
    
};

const question6 = {
    question: 'Which value is falsy in Javascript?',
    choice1: {answer1: "'true'", response: 'false',},
    choice2: {answer2: "'false'", response: 'false',},
    choice3: {answer3: '42', response: 'false',},
    choice4: {answer4: 'null', response: 'true',},
    
};

const questionsArray = [question1, question2, question3, question4, question5, question6];




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

//Returns response of Button 1
quizChoice1.addEventListener('click', function() {
    if (quizChoice1.dataset.response === 'false') {
        answer.innerHTML = 'Incorrect';
        timeLeft = timeLeft - 10;
        generateQuestions();
    } else {
        answer.innerHTML = 'That is correct!';
        generateQuestions();
    }
});

//Returns response of Button 2
quizChoice2.addEventListener('click', function() {
    if (quizChoice2.dataset.response === 'false') {
        answer.innerHTML = 'Incorrect';
        timeLeft = timeLeft - 10;
        generateQuestions();
    } else {
        answer.innerHTML = 'That is correct!';
    }   generateQuestions();
});

//Returns response of Button 3
quizChoice3.addEventListener('click', function() {
    if (quizChoice3.dataset.response === 'false') {
        answer.innerHTML = 'Incorrect';
        timeLeft = timeLeft - 10;
        generateQuestions();
    } else {
        answer.innerHTML = 'That is correct!';
        generateQuestions();
    }
});

//Returns response of Button 4
quizChoice4.addEventListener('click', function() {
    if (quizChoice4.dataset.response === 'false') {
        answer.innerHTML = 'That is incorrect.';
        timeLeft = timeLeft - 10;
        generateQuestions();
    } else {
        answer.innerHTML = 'That is correct!';
        generateQuestions();
    }
});



