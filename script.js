const quizData = [
    {
        question: "Who is the author of The Lord of The Ring?",
        a: "J. K. Rowling",
        b: "George R. R. Martin",
        c: "J. R. R. Tolkien",
        d: "Stephen King",
        correct: "c"
    },
    {
        question: "Who translated The Gadfly into Sinhalese?",
        a: "Henry Jayasena",
        b: "Sugathapala de Silva",
        c: "Simon Nawagaththegama",
        d: "Victor Ivan",
        correct: "b"
    },
    {
        question: "Who sang the 'Friends' theme song?",
        a: "The Rembrandts",
        b: "The Academy",
        c: "Nirvana",
        d: "Weezer",
        correct: "a"
    },
    {
        question: "What was Sherlock Holmes IQ?",
        a: "110",
        b: "130",
        c: "190",
        d: "160",
        correct: "c"
    },
    {
        question: "How many moons does Jupiter have 2020?",
        a: "82",
        b: "4",
        c: "69",
        d: "79",
        correct: "d"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEL.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        } 
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload &#x21BA;</button>`
        }
    }
})