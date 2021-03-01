[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/cdfishe1/javascript-quiz)
![GitHub top language](https://img.shields.io/github/languages/top/cdfishe1/javascript-quiz)


# Javascript Quiz

Generates a quiz game of questions involving html, css, and javascript.

## Table of Contents
* [Javascript Quiz Page](#javascript-quiz-screencast)
* [Deployment](#deployment)
* [Scope of Project](#scope-of-project)
* [Installation](#installation)
* [Code Highlight](#code-highlight)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)

## Javascript Quiz Page

### Screencast on mobile
![Screencast on mobile](assets/images/mobile.gif)


## Deployment

Site deployed at [Charles Fisher](https://cdfishe1.github.io/javascript-quiz/)

## Scope of Project

* Used ES6 features such as const and let for variable declaration and arrow functions to enhance readability of the script.
* Uses javascript to dynamically populate the contents of elements.
* Uses setTimeout to create needed pauses to delay function executions.


## Installation

Deploy the html file and assets folder that contains the images, css, and javascript files on a website host server.

## Code Highlight

I use an array constructed from a nodelist to construct event listners on answer buttons as detailed below. This saved me from creating four different event handlers.

```
//Creates an array from the buttons nodelist and creates eventlistener for each choice button
//David Metcalfe, bootcamp tutor, helped me understand and create this functionality

//Gets all the buttons via the choice-button class
const allChoices = document.getElementsByClassName('choice-button');
//Creates an array for these buttons using the Array prototype constructor
const buttonsArray = Array.from(allChoices);
//Runs a forEach loop through each button passing the event listener to each one.
buttonsArray.forEach((button) => {
  button.addEventListener('click', function () {
      //Counts the clicks of the answer buttons
    variables.answerClicks++;
    if (button.dataset.response === 'false') {
        //Prints response on false, deducts 5 seconds, re-executes generateQuestions

        variables.answer.innerHTML = 'That is incorrect.\n' + button.dataset.explain;
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
```


## Testing

Tested accessibility using [WAVE web accessbility evaluation tool](https://wave.webaim.org/report#/https://cdfishe1.github.io/javascript-quiz/)

* Generates 0 errors.

Generates 0 errors on load or through execution.

## Credits

* David Metcalfe, bootcamp tutor, for helping me to create an array from a nodelist in order to pass a forEach method to make event handlers.

## License

Copyright (c) Charles Fisher All rights reserved.<br>
Please be kind and change content if you wish to use this code.

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Charles Fisher

<blockquote>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</blockquote>
</details>

