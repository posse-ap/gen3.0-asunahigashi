const question = document.getElementById('question');
const btn = document.getElementById('btn');
const choices = document.getElementById('choices');

const quizSet = [
    {q: 'What is A?', c: ['A0', 'A1', 'A2']},
    {q: 'What is B?', c: ['B0', 'B1', 'B2']},
    {q: 'What is C?', c: ['C0', 'C1', 'C2']},
];
let currentNum = 0; // 現在出題中の問題数をカウント

question.textContent = quizSet[currentNum].q; // currentNum問目の質問文を

quizSet[currentNum].c.forEach(choice => { // choiceに quizSetのcurrentNum番目のc要素をひとつずつ渡す
    const li = document.createElement('li'); // <li>要素を生成する
    li.textContent = choice; // 生成した<li>に choice を代入する
    choices.appendChild(li); // <ul id="choices">直下に上記の li を入れる
});

function checkAnswer(li) {  // 正誤判定関数
    if (li.textContent === quizSet[currentNum].c[0]) { // クリックしたli要素のテキストが、c[0] = 正解と同じだったら
      li.classList.add('correct'); // 正解処理
    } else {
      li.classList.add('wrong'); // 不正解処理
    }
}

  function setQuiz() { // クイズ描画に関する処理まとめ
    question.textContent = quizSet[currentNum].q;

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
      li.addEventListener('click', () => { // クリックイベントを追加
        checkAnswer(li); // 正誤判定関数を実行
    });
choices.appendChild(li);
    });
}

setQuiz();