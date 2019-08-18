let score = 0;
let number = 0;

function callQuestion () {
  if (number<4) {
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
    $('.questionNumber').text(10)
  }
}


function advanceQuestion() {
 if (number<4){
   number = number+1;
   $('.number').text(number+1);
 }
}

function rightAnswer() {
  $('form').on('submit', function(event) {
    let selected = $('input:checked');
    let answer = selected.val();
    let rightAnswer = ${questions[number].right};    
    if (answer===rightAnswer){
      great();
    } else {
      notGreat();
    }
  }
}

function upScore() {
 score = score+1;
};

function great() {
  upScore();
  $('.questionBlock').html('<p>You got it right!</p><button type="button" class="continueButton">Continue</button>');
}

function notGreat() {
  $('.questionBlock').html('<p>The correct answer was ${correctAnswer}.</p><button type="button" class="continueButton">Continue</button>');
}

function currentScore() {
  $('.scoreBlock').html(`<p>Your score is ${score} out of 5</p>`);
};

function endingQuiz() {
  $('.questionBlock').html(`<p>Your final score is ${score} out of 5</p><p>If you want  to try again, click here</p><button type="button" class="restartButton">Start over</button>`);
  $('.scoreBlock').remove();
}

function backToBeginning () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
};

function beginQuiz () {
  $('.quizStart').on('click', '.Button', function (event) {
    $('.quizStart').html(question.number);
  });
}

function renderQuestion () {
  $('.questionAnswerForm').remove()
  .html(callQuestion());
}

function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

function firstProcedure () {
  beginQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(firstProcedure);
