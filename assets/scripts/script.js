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
const time = document.getElementById('countDown');
const score = document.getElementById('score');
const gameScore = document.getElementById('gameScore');
const playerInitials = document.getElementById('playerInitials');
const saveButton = document.getElementById('save');
const playAgaiin = document.getElementById('playAgain');

let timeLeft = 60;

let removedQuestions = [];

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

//An array of all the questions
const questionsArray = [question1, question2, question3, question4, question5, question6];

//Introduction to the game with Start Game button
mainHead.innerHTML = 'Coding Quiz Challenge';
explain.innerHTML = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.';
startGameButton.innerHTML = 'Start Game';
// startGameButton.style.fontSize = '1rem';

//Start the Game
const startGame = () => {
    startGameButton.style.display = 'none';
    explain.style.display = 'none';
    choiceButtons.style.display = 'initial';
    generateQuestions();
    timer();
};

//Timer
const timer = () => {
    let timerInterval = setInterval(function() {
        timeLeft--;
        time.innerHTML = timeLeft;
        //Executes endGame if timer reaches 0 or all questions have passed.
        console.log(questionsArray);
        if((timeLeft <= 0) || questionsArray.length === 0) {
          clearInterval(timerInterval);
          endGame();
        }
    
      }, 1000);
};

//Executes the startGame function when Start Game button is clicked.
startGameButton.addEventListener('click', startGame);


//Generates the quiz questions
const generateQuestions = () => { 

    //Randomly picks a question from the questionsArray
    let i = Math.floor(Math.random() * questionsArray.length);

    if (questionsArray.length > 0) {
      //The question currently on the screen
      currentQuestion = questionsArray[i];
      //Prints the current question
      mainHead.innerHTML = currentQuestion.question;
      //Prints the first choice of the current question and sets response attribute
      quizChoice1.innerHTML = currentQuestion.choice1.answer1;
      quizChoice1.setAttribute('data-response', currentQuestion.choice1.response);
      //Prints the second choice of the current question and sets response attribute
      quizChoice2.innerHTML = currentQuestion.choice2.answer2;
      quizChoice2.setAttribute('data-response', currentQuestion.choice2.response);
      //Prints the third choice of the current question and sets response attribute
      quizChoice3.innerHTML = currentQuestion.choice3.answer3;
      quizChoice3.setAttribute('data-response', currentQuestion.choice3.response);
      //Prints the fourth choice of the current question and sets response attribute
      quizChoice4.innerHTML = currentQuestion.choice4.answer4;
      quizChoice4.setAttribute('data-response', currentQuestion.choice4.response);
      //Removes the current question from the questionsArray and pushes it to removedQuestions
      removedQuestions.push(questionsArray.splice(i, 1));
    } else {
      endGame();
    }
  };

//Returns response of Button 1
quizChoice1.addEventListener('click', function() {
    if (quizChoice1.dataset.response === 'false') {
        //Prints response, deducts 10 seconds, re-executes generateQuestions
        answer.innerHTML = 'That is incorrect.';
        answer.style.backgroundColor = '#9B223B';
        answer.style.color = '#fff';
        timeLeft = timeLeft - 5;
        generateQuestions();
    } else {
        //Prints response, re-executes generateQuestions
        answer.innerHTML = 'That is correct!';
        answer.style.backgroundColor = '#132A13';
        answer.style.color = '#fff';
        generateQuestions();
    }
});

//Returns response of Button 2
quizChoice2.addEventListener('click', function() {
    if (quizChoice2.dataset.response === 'false') {
        //Prints response, deducts 10 seconds, re-executes generateQuestions
        answer.innerHTML = 'That is incorrect.';
        answer.style.backgroundColor = '#9B223B';
        answer.style.color = '#fff';
        timeLeft = timeLeft - 5;
        generateQuestions();
    } else {
        //Prints response, re-executes generateQuestions
        answer.innerHTML = 'That is correct!';
        answer.style.backgroundColor = '#132A13';
        answer.style.color = '#fff';
    }   generateQuestions();
});

//Returns response of Button 3
quizChoice3.addEventListener('click', function() {
    if (quizChoice3.dataset.response === 'false') {
        //Prints response, deducts 10 seconds, re-executes generateQuestions
        answer.innerHTML = 'That is incorrect.';
        answer.style.backgroundColor = '#9B223B';
        answer.style.color = '#fff';
        timeLeft = timeLeft - 5;
        generateQuestions();
    } else {
        //Prints response, re-executes generateQuestions
        answer.innerHTML = 'That is correct!';
        answer.style.backgroundColor = '#132A13';
        answer.style.color = '#fff';
        generateQuestions();
    }
});

//Returns response of Button 4
quizChoice4.addEventListener('click', function() {
    //Prints response, deducts 10 seconds, re-executes generateQuestions
    if (quizChoice4.dataset.response === 'false') {
        answer.innerHTML = 'That is incorrect.';
        answer.style.backgroundColor = '#9B223B';
        answer.style.color = '#fff';
        timeLeft = timeLeft - 5;
        generateQuestions();
    } else {
        //Prints response, re-executes generateQuestions
        answer.innerHTML = 'That is correct!';
        answer.style.backgroundColor = '#132A13';
        answer.style.color = '#fff';
        generateQuestions();
    }
});

//Endgame

const endGame = () => {
    choiceButtons.style.display = 'none';
    answer.style.display = 'none';
    gameScore.style.display = 'initial';
    playerInitials.style.display = 'initial';
    mainHead.innerHTML = 'All Done!';
    score.innerHTML = timeLeft;
};

saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    

    const storeScores = {
        initials: initials.value,
        timeLeft: timeLeft,
    }

    localStorage.setItem("storeScores", JSON.stringify(storeScores));
    renderScores(); 
});

const renderScores = () => {
    let lastScore = JSON.parse(localStorage.getItem("storeScores"));

    if (lastScore !== null) {
        document.getElementById("highScores").textContent = lastScore.initials + ' scored ' +
        lastScore.timeLeft;
      }
};





