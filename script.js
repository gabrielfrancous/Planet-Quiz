let score = 0;
let number = 0;

function endingQuiz() {
  $('.questionBlock').html(`<p>Your final score is ${score} out of 5</p><p>If you want  to try again, click here</p><button type="button" class="restartButton">Start over</button>`);
  $('.scoreBlock').hide();
}

function callQuestion () {
  if (number<5) {
  return `<div class="question-${number}">
    <h2>${questions[number].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${questions[number].answers[0]}" name="answer" required>
    <span>${questions[number].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${questions[number].answers[1]}" name="answer" required>
    <span>${questions[number].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${questions[number].answers[2]}" name="answer" required>
    <span>${questions[number].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${questions[number].answers[3]}" name="answer" required>
    <span>${questions[number].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    endingQuiz();
  }
}

function advanceQuestion() {
 if (number<5){
   number = number+1;
   $('.number').text(number+1);
 }
}

$('.questionBlock').on('click', '.submitButton', function (event) {
  rightAnswer();
});

function rightAnswer() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let rightAnswer = `${questions[number].right}`;    
    if (answer === rightAnswer){
      great();
    } else {
      notGreat();
    };
  });
}

function currentScore() {
  $('.scoreBlock').html(`<p>Your score is ${score} out of 5</p>`);
}

function upScore() {
 score = score+1;
}

function great() {
  upScore();
  $('.questionBlock').html('<p>You got it right!</p><button type="button" class="nextButton">Continue</button>');
  $('.scoreBlock').html(currentScore());
}

function proceedQuiz() {
  $('.questionBlock').on('click', '.nextButton', function (event) {
    event.preventDefault();
    $('.questionBlock').html(advanceQuestion());
    $('.questionBlock').html(callQuestion());
  });
}

function notGreat() {
  let rightAnswer = `${questions[number].right}`;
  $('.questionBlock').html(`<p>The correct answer was ${rightAnswer}.</p><button type="button" class="nextButton">Continue</button>`);
  $('.scoreBlock').html(currentScore());
}


function backToBeginning () {
  $('.questionBlock').on('click', '.restartButton', function (event) {
    score = 0;
    number = 0;
    $('.questionBlock').html(callQuestion());
    $('.scoreBlock').show();
  });
}

function renderInitialHtml() {
  $('.questionBlock').on('click', '.restartButton', function (event) {
  });
}

function beginQuiz () {
  $('.questionBlock').on('click', '.quizStart', function (event) {
    event.preventDefault();
    $('.questionBlock').html(callQuestion());
  });
}

function generateQuestion() {
  return `<h3>${questions[number].question}</h3><ul>${questions[number].answers}</ul>`
}

function renderQuestion () {
  $('.questionAnswerForm').remove()
  .html(callQuestion());
}

function firstProcedure () {
  beginQuiz();
  renderQuestion();
  rightAnswer();
  currentScore();
  proceedQuiz();
  backToBeginning();
  currentScore();
}

$(firstProcedure)

