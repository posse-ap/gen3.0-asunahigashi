'use select';

const CORRECT_ANSWERS = [
    {
    index : 1, 
    value : '約79万人',
},
]


const allQuiz = document.querySelectorAll('js-quiz');

const setDisabled = answers => {
    answers.forEach(answer => {
        answer.disabled = true;
    })
}
const setTitle = (target,isCorrect) => {
    target.innerText = isCorrect ? '正解！' :'不正解...'
}

const setClassName = (target,isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
}

allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    
})