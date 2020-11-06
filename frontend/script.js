import { showQuestionList } from "bet_home.js"
import { createQuestion } from "bet_new_question.js"
import { showQuestionDetails, makeBet } from "bet_question.js"

export async function fetchQuestions(filter){
  let qid, qdesc, qexp = await showQuestionList(filter);

  let qexpdate = [];

  for(let i = 0; i < qexp.length(); i++) {
    let time_convert = new Date(qexp)
    let y = time_convert.getFullYear();
    let m = time_convert.getMonth();
    let d = time_conver.getDate();
    let date_string = y + '-' + m + '-' + d;
    qexpdate.append(date_string);
  }
  let fetchElement = document.getElementById('fetchQuestions');
  for(let i = 0; i < qid.length(); i++) {
    fetchElement.appendChild(createElementList(qid[i], qdesc[i], qexpdate[i]));
  }
}

function createElementList(qid_i, qdesc_i, qexp_i) {
  const box = document.createElement('article');
  box.className = 'tile is-child box';

  const content = document.createElement('div');
  content.className = 'content';

  const paragraph = document.createElement('p');

  var linkText = document.createTextNode(qid_i);
  const a = document.createElement('a');
  a.href = "question.html" + "?qid=" + qid_i;
  a.appendChild(linkText);
  const qid = document.createElement('strong');
  qid.appendChild(a);

  const date = document.createElement('small');
  date.innerText = qexp_i;

  const newLine = document.createElement('br');

  const description = document.createTextNode(qdesc_i);

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

  let q_id, qdesc, qexp, opdesc, opcount = await showQuestionDetails(filter);

  qid.innerText = q_id;
  question.innerText = qdesc;

  let time_convert = new Date(qexp)
  let y = time_convert.getFullYear();
  let m = time_convert.getMonth();
  let d = time_conver.getDate();
  rdate.innerText = y + '-' + m + '-' + d;
  
  option1.innerText = opdesc[0];
  option2.innerText = opdesc[1];
  option3.innerText = opdesc[2];

  op_sum = opcount[0] + opcount[1] + opcount[2];

  option_progress1.value = opcount[0]/op_sum;
  option_progress2.value = opcount[1]/op_sum;
  option_progress3.value = opcount[2]/op_sum;

}

export function submitVoteForm() {
  const myform = document.forms["myform"];
  const amount = myform["amount"].value;
  const vote = myform["vote"].value;
  // panggil api kasih makan vote sama amount nya
  // alert submitted
  location.reload();
}


export async function submitMarketForm() {
  const myform = document.forms["myform"];
  const question = myform["question"].value;
  const option1 = myform["option1"].value;
  const option2 = myform["option2"].value;
  const option3 = myform["option3"].value;
  const deposit = myform["deposit"].value;
  const date = myform["date"].value; 
  let y = date.split("-")[0];
  let m = date.split("-")[1];
  let d = date.split("-")[2];
  let d_insecond = Date.UTC(y, m, d);

  await createQuestion(question, d_insecond, 0x9e65eD8bb7dc3209536A6b7189cE012fD2c3b22b, [option1, option2, option3]);

  // panggil api kasih makan smua
  alert ("submitted");
  // go to index.html
  window.location.href = 'index.html';
}