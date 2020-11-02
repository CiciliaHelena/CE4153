const bet_home = import("./../webapp/bet_home.js");

export function fetchQuestions(filter) {
  let questions = bet_home.showQuestionList(filter)
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

  const qid = document.createElement('strong'); // <a href="question.html">question_ID</a>
  qid.innerText = question.question_id;

  const date = document.createElement('small');
  date.innerText = question.resolution_time;

  const newLine = document.createElement('br');

  const description = document.createTextNode(question.description);

  paragraph.appendChild(qid)
  paragraph.appendChild(date)
  paragraph.appendChild(newLine)
  paragraph.appendChild(description)

  content.appendChild(paragraph)
  box.appendChild(content)
  return box;
}
