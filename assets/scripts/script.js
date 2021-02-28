//Variables

const variables = {
    mainHead: document.querySelector('h1'),
    quizChoice1: document.getElementById('choice1'),
    quizChoice2: document.getElementById('choice2'),
    quizChoice3: document.getElementById('choice3'),
    quizChoice4: document.getElementById('choice4'),
    choiceButtons: document.querySelector('ul'),
    explain: document.getElementById('gameExplanation'),
    startGameButton: document.getElementById('startGame'),
    answer: document.getElementById('answer'),
    time: document.getElementById('countDown'),
    score: document.getElementById('score'),
    gameScore: document.getElementById('gameScore'),
    playerInitials: document.getElementById('playerInitials'),
    saveButton: document.getElementById('save'),
    playAgain: document.getElementById('playAgain'),
    timeLeft: 60,
    answerClicks: 0,
    
};

const quizQuestions = {
    question1: {
        question: 'How do you construct an array in Javascript?',
        choice1: {answer1: '{1,2,3}', response: 'false',},
        choice2: {answer2: '[1,2,3]', response: 'true',},
        choice3: {answer3: '(1,2,3)', response: 'false',},
        choice4: {answer4: '<1,2,3>', response: 'false',},},
    
    question2: {
        question: 'What is the value passed when clicking "cancel" in a Confirm Box?',
        choice1: {answer1: 'true', response: 'false',},
        choice2: {answer2: 'null', response: 'false',},
        choice3: {answer3: 'false', response: 'true',},
        choice4: {answer4: 'NaN', response: 'false',},},
    
    question3: {
        question: 'Which array method adds an element to the end of an array?',
        choice1: {answer1: 'join', response: 'false',},
        choice2: {answer2: 'push', response: 'true',},
        choice3: {answer3: 'pop', response: 'false',},
        choice4: {answer4: 'shift', response: 'false',},},
    
    question4: {
        question: 'What unit measures font size relative to the root element?',
        choice1: {answer1: 'px', response: 'false',},
        choice2: {answer2: 'vh', response: 'false',},
        choice3: {answer3: 'em', response: 'false',},
        choice4: {answer4: 'rem', response: 'true',},},
    
    question5: {
        question: 'Which position property removes an element out of the normal flow of the document?',
        choice1: {answer1: 'relative', response: 'false',},
        choice2: {answer2: 'sticky', response: 'false',},
        choice3: {answer3: 'absolute', response: 'true',},
        choice4: {answer4: 'static', response: 'false',},},

    question6: {
        question: 'Which value is falsy in Javascript?',
        choice1: {answer1: "'true'", response: 'false',},
        choice2: {answer2: "'false'", response: 'false',},
        choice3: {answer3: '42', response: 'false',},
        choice4: {answer4: 'null', response: 'true',},},
    
};


//An array of all the questions
const questionsArray = [quizQuestions.question1, quizQuestions.question2, quizQuestions.question3, quizQuestions.question4, quizQuestions.question5, quizQuestions.question6];

//Introduction to the game with Start Game button
variables.mainHead.innerHTML = 'Coding Quiz Challenge';
variables.explain.innerHTML = 'Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds.';
variables.startGameButton.innerHTML = 'Start Game';


//Start the Game
const startGame = () => {
    variables.startGameButton.style.display = 'none';
    variables.explain.style.display = 'none';
    variables.choiceButtons.style.display = 'initial';
    generateQuestions();
    timer();
};

//Sets game timer
 const timer = () => {
    let timerInterval = setInterval(function() {
        variables.timeLeft--;
        variables.time.innerHTML = variables.timeLeft;
        //Executes endGame if timer reaches 0 or all questions have passed.
        if((variables.timeLeft <= 0) || (variables.answerClicks === 6)) {
          clearInterval(timerInterval);
    
          let endGameTimeout = setTimeout(() => {
            endGame();
            clearTimeout(endGameTimeout);
        }, 2000);
        
        }
      }, 1000);
 };


//Executes the startGame function when Start Game button is clicked.
variables.startGameButton.addEventListener('click', startGame);

//Generates the quiz questions
const generateQuestions = () => { 

    //Randomly picks a question from the questionsArray
    let i = Math.floor(Math.random() * questionsArray.length);

    if (questionsArray.length > 0) {

      //The question currently on the screen
      currentQuestion = questionsArray[i];
      //Prints the current question
      variables.mainHead.innerHTML = currentQuestion.question;
      //Prints the first choice of the current question and sets response attribute
      variables.quizChoice1.innerHTML = currentQuestion.choice1.answer1;
      variables.quizChoice1.setAttribute('data-response', currentQuestion.choice1.response);
      //Prints the second choice of the current question and sets response attribute
      variables.quizChoice2.innerHTML = currentQuestion.choice2.answer2;
      variables.quizChoice2.setAttribute('data-response', currentQuestion.choice2.response);
      //Prints the third choice of the current question and sets response attribute
      variables.quizChoice3.innerHTML = currentQuestion.choice3.answer3;
      variables.quizChoice3.setAttribute('data-response', currentQuestion.choice3.response);
      //Prints the fourth choice of the current question and sets response attribute
      variables.quizChoice4.innerHTML = currentQuestion.choice4.answer4;
      variables.quizChoice4.setAttribute('data-response', currentQuestion.choice4.response);
      //Removes the current question from the questionsArray and pushes it to removedQuestions
      questionsArray.splice(i, 1); 
    } else {
        let endGameTimeout = setTimeout(() => {
        endGame();
        clearTimeout(endGameTimeout);
    }, 2000);
    }
};

//Creates an array from the buttons nodelist and creates eventlistener for each choice button
//David Metcalfe, bootcamp tutor, helped me understand and create this functionality
const allChoices = document.getElementsByClassName('choice-button');
const buttonsArray = Array.from(allChoices);
buttonsArray.forEach((button) => {
  button.addEventListener('click', function () {
    variables.answerClicks++;
    if (button.dataset.response === 'false') {
        //Prints response on false, deducts 10 seconds, re-executes generateQuestions

        variables.answer.innerHTML = 'That is incorrect.';
        variables.answer.style.backgroundColor = '#9B223B';
        variables.answer.style.color = '#fff';
        variables.answer.style.fontSize = '1.25rem';
        variables.timeLeft = variables.timeLeft - 5;
        generateQuestions();
    } else {
        //Prints response on true, re-executes generateQuestions
        variables.answer.innerHTML = 'That is correct!';
        variables.answer.style.backgroundColor = '#132A13';
        variables.answer.style.color = '#fff';
        generateQuestions();
    }
    
  });
});

//Endgame
const endGame = () => {
    variables.choiceButtons.style.display = 'none';
    variables.answer.style.display = 'none';
    variables.gameScore.style.display = 'initial';
    variables.playerInitials.style.display = 'initial';
    variables.mainHead.innerHTML = 'All Done!';
    variables.score.innerHTML = variables.timeLeft;
};


//Save button for initials. Sets up local storage for intials and score
variables.saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const storeScores = {
        initials: initials.value,
        timeLeft: variables.timeLeft,
    }

    localStorage.setItem("storeScores", JSON.stringify(storeScores));
    renderScores(); 
});

const renderScores = () => {
    let lastScore = JSON.parse(localStorage.getItem("storeScores"));

    
    if (lastScore !== null) {
        document.getElementById("userScores").textContent = lastScore.initials + ' scored ' +
        lastScore.timeLeft;
      }
};