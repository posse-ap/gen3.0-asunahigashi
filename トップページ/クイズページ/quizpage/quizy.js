'use strict';

const lists = [ {
    id: 1,
    question_number :`Q1`,
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    img:`./img/img-quiz01.png`,
    answers: ['約28万人', '約79万人', '約183万人'],
    correctText: '約79万人',
    note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
  },
  {
    id: 2,
    question_number :`Q2`,
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    img:`./img/img-quiz02.png`,
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctText: 'X-TECH',
    note: ''
  },
  {
    id: 3,
    question_number :`Q3`,
    question: 'IoTとは何の略でしょう？',
    img:`./img/img-quiz03.png`,
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctText: 0,
  },
  {
    id: 4,
    question_number :`Q4`,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    img:`./img/img-quiz04.png`,
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctText: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府'
  },
  {
    id: 5,
    question_number :`Q5`,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    img:`./img/img-quiz05.png`,
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correctText: 0,
  },
  {
    id: 6,
    question_number :`Q6`,
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    img:`./img/img-quiz06.png`,
    answers: ['約2倍', '約5倍', '約11倍'],
    correctText: 1,
    note: 'Accenture Technology Vision 2021'
  }
];




function createText(text,index,answer_box){
    if(text===lists[index].correctText){
        console.log('aaa');
        const correcthtml = `<div class="correct-container"><div class="correct-css">正解</div> 
        <p class="correct-note">${lists[index].correctText}</p></div>`
        answer_box.insertAdjacentHTML('beforeend', correcthtml);
    }
    else{
        console.log('bbb')
        const correcthtml = `<div class="iscorrect-container"><div class="iscorrect-css">不正解...</div> 
        <p class="correct-note correct-note-add">${lists[index].correctText}</p></div>`
        answer_box.insertAdjacentHTML('beforeend', correcthtml);
    }
}

for ( let i = 0; i < lists.length; i++){
    let array=lists[i].answers;
    let newArray = [];

while (array.length > 0) {
  let n = array.length;
  let k = Math.floor(Math.random() * n);

  newArray.push(array[k]);
  array.splice(k, 1);
}

console.log("ランダムな数列", newArray);



const all_quiz = 
`<div id="${i}" class="quiz-section">
    <div class="quiz-body_question">
      <div class="quiz-body_question_number">
        <h2 class="quiz-body_question_number_text">${lists[i].question_number}</h2>
      </div>
        <p class ="quiz-body_question_text">${lists[i].question}</p>
        <img src="${lists[i].img}" alt="" class="quiz-body_question_img">
    </div>
    <div class="quiz-body_answer">
      <div class="quiz-body_answer_number">
        <h2 class="quiz-body_answer_number_text">A</h2>
      </div>
        <ul class="quiz-body_answer_about">
                <button class="button${i} button" >
                <li class="answer${i} answer" id="answer1">${newArray[0]}</li>
                </button>
                <button class="button${i} button">
                <li class="answer${i} answer" id="answer2">${newArray[1]}</li>
                </button>
                <button class="button${i} button">
                <li class="answer${i} answer" id="answer3">${newArray[2]}</li>
                </button>
        </ul>
    </div>
    <div class="answer_box disappear js-answer-box${i}"></div>
    <div class="quiz-body_note disappear js-note-box${i}">
      <p class="quiz-body_note_text ">${lists[i].note}</p>
    </div>
</div>`;
console.log( lists [i]);
document.getElementById('1').insertAdjacentHTML('beforeend', all_quiz);

// console.log('good');
}


const allquiz_html = document.querySelectorAll('.quiz-section');




allquiz_html.forEach((quizhtml,index) => {
    console.log(index);
    const buttons = document.querySelectorAll(`.button${index}`);
   //  const answers_text = document.querySelectorAll(`.button${index} li`);
    // const answers_text = document.querySelectorAll(".answer");
    const answers_text = document.querySelector(`.answer${index}`);
    const answer_box = document.querySelector(`.js-answer-box${index}`);
    const note_box = document.querySelector(`.js-note-box${index}`);
    buttons.forEach(button =>{
        button.addEventListener('click',function(){
            const clickedanswertext =button.innerText
            createText(clickedanswertext,index,answer_box)
            button.classList.add('js-selected')
            // answers_text.classList.add('correct-note-add')
            answer_box.classList.remove('disappear')
            note_box.classList.remove('disappear')

            buttons.forEach(e => {
                e.disabled = true
            })
        });
    });
    
});



