

const question1 = {
    question: 'How do you construct an array in Javascript?',
    choice1: {answer1: 'const array = {1,2,3}', value: false,},
    choice2: {answer2: 'const array = [1,2,3]', value: true,},
    choice3: {answer3: 'const array = (1,2,3)', value: false,},
    choice4: {answer4: 'const array = <1,2,3>', value: false,},
    
};

const question2 = {
    question: 'What is the value passed when clicking "cancel" in a Confirm Box?',
    choice1: {answer1: 'true', value: false,},
    choice2: {answer2: 'null', value: false,},
    choice3: {answer3: 'false', value: true,},
    choice4: {answer4: 'NaN', value: false,},
    
};

const question3 = {
    question: 'Which array method adds an element to the end of an array?',
    choice1: {answer1: '.push', value: true,},
    choice2: {answer2: '.pull', value: false,},
    choice3: {answer3: '.pop', value: false,},
    choice4: {answer4: '.shift', value: false,},
    
};

const questionsArray = [question1, question2, question3];

const quizQuestion = document.getElementById('question');
const quizChoice1 = document.getElementById('choice1');
const quizChoice2 = document.getElementById('choice2');
const quizChoice3 = document.getElementById('choice3');
const quizChoice4 = document.getElementById('choice4');
const quizAnswer = document.getElementById('answer');

quizQuestion.innerHTML = question1.question;
quizChoice1.innerHTML = question1.choice1.answer1;
quizChoice2.innerHTML = question1.choice2.answer2;
quizChoice3.innerHTML = question1.choice3.answer3;
quizChoice4.innerHTML = question1.choice4.answer4;