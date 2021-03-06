
var answerButton = document.querySelector('.answer-button')
var userInput  =document.querySelector('.user-input')
var question  =document.querySelector('.question')
var answer  =document.querySelector('.answer')
var eightBall = document.querySelector('.eight-ball')
var section = document.querySelector('section')
var clearButton = document.querySelector('.clear')

answerButton.disabled = true;
clearButton.disabled = true;
var output =[
'It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes - definitely.',
'You may rely on it.',
'As I see it, yes.',
'Most likely.',
'Outlook good.',
'Yes.',
'Signs point to yes.',
'Reply hazy, try again.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
'Don\'t count on it.',
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.',]

var currentOutput;

section.addEventListener('keyup', checkInput);

clearButton.addEventListener('click',function() {
  toggleHiddenClass(eightBall)
  toggleHiddenClass(question)
  toggleHiddenClass(answer)
  clearButton.disabled =true
})

answerButton.addEventListener('click',function() {
  createOutput()
  toggleHiddenClass(eightBall)
  toggleHiddenClass(question)
  toggleHiddenClass(answer)
  addCurrentOutputtoHtml()
  clearUserInput()
  answerButton.disabled = true;

  enableClearButton()
})

function createOutput(){
  var newOutput = new Output(userInput.value,getRandomOutput())
  currentOutput = newOutput
}

function getRandomOutput() {
  return output[Math.floor(Math.random() * output.length)];
}

function addCurrentOutputtoHtml() {
  question.innerText = currentOutput.question;
  answer.innerText = currentOutput.answer;
}

function toggleHiddenClass(element) {
  element.classList.toggle('hidden');
}

function clearUserInput() {
  userInput.value = '';
}

function checkInput() {
  if (userInput.value === "" ) {
    answerButton.disabled = true;
  }else {
    answerButton.disabled = false;

  }
}
function enableClearButton(){
  clearButton.disabled = false;
}
