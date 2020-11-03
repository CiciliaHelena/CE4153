import { showQuestionList } from "./../webapp/bet_home.js"

export function fetchQuestions(filter) {
  let questions = showQuestionList(filter);
  let fetchElement = document.getElementById('fetchQuestions');
  questions.forEach((question) => {
    fetchElement.appendChild(createElementList(question));
  })
}

function createElementList(question) {
  const box = document.createElement('article');
  box.className = 'tile is-child box';

  const content = document.createElement('div');
  content.className = 'content';

  const paragraph = document.createElement('p');

  var linkText = document.createTextNode(question.question_id);
  const a = document.createElement('a');
  a.href = "question.html" + "?qid=" + question.question_id;
  a.appendChild(linkText);
  const qid = document.createElement('strong');
  qid.appendChild(a);

  const date = document.createElement('small');
  date.innerText = question.resolution_time;

  const newLine = document.createElement('br');

  const description = document.createTextNode(question.description);

  paragraph.appendChild(qid);
  paragraph.appendChild(date);
  paragraph.appendChild(newLine);
  paragraph.appendChild(description);

  content.appendChild(paragraph);
  box.appendChild(content);
  return box;
}

export function fetchQuestion(filter) {
  let qid = document.getElementById('qid');
  let question = document.getElementById('question');
  let rdate = document.getElementById('rdate');
  let option1 = document.getElementById('option1');
  let option2 = document.getElementById('option2');
  let option3 = document.getElementById('option3');
  let option_progress1 = document.getElementById('option_progress1');
  let option_progress2 = document.getElementById('option_progress2');
  let option_progress3 = document.getElementById('option_progress3');

  // panggil yg fetch question dan lengkapi func di bawah

  qid.innerText = 1;
  question.innerText = 1;
  rdate.innerText = 1;
  option1.innerText = 1;
  option2.innerText = 1;
  option3.innerText = 1;
  option_progress1.value = 1;
  option_progress2.value = 1;
  option_progress3.value = 1;

}

export function submitVoteForm() {
  const myform = document.forms["myform"];
  const amount = myform["amount"].value;
  const vote = myform["vote"].value;
  // panggil api kasih makan vote sama amount nya
  // alert submitted
  location.reload();
}


export function submitMarketForm() {
  const myform = document.forms["myform"];
  const question = myform["question"].value;
  const option1 = myform["option1"].value;
  const option2 = myform["option2"].value;
  const option3 = myform["option3"].value;
  const deposit = myform["deposit"].value;
  const date = myform["date"].value;
  // panggil api kasih makan smua
  // alert submitted
  // go to index.html

}