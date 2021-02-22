

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

const choiceButtons = document.querySelector('ul');

const generateQuestion = () => {
    let i = Math.floor(Math.random() * questionsArray.length);
    quizQuestion.innerHTML = questionsArray[i].question;
    quizChoice1.innerHTML = questionsArray[i].choice1.answer1;
    quizChoice2.innerHTML = questionsArray[i].choice2.answer2;
    quizChoice3.innerHTML = questionsArray[i].choice3.answer3;
    quizChoice4.innerHTML = questionsArray[i].choice4.answer4;
    questionsArray.splice(i, 1);

};

choiceButtons.addEventListener('click', generateQuestion);

generateQuestion();