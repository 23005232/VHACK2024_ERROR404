
        function goToHome() {
            window.location.href = 'homepage.html';
        }

        function goBack() {
            window.location.href = 'level_selection.html'
        }

const questions = [
    {
    question:"All of the following are what you can do to avoid being scammed, EXCEPT?",
    answers:[
        {text:"Be cautious of investments offered via Facebook, Telegram, Instagram and WhatsApp.",correct:false},
        {text:"Always check the SC's Investor Alert List before investing. The SC's Investor Alert List of unauthorized websites, investment products, companies and individuals.",correct:false},
        {text:"Invest just because the scheme/product claims to be endorsed by celebrities.",correct:true},
        {text:"Deal only with individuals/entities who/that are registered or licensed by the SC.",correct:false},
        ]
    },
    {
    question:"To report a scam, what you can do?",
    answers:[
        {text:"Email to aduan@seccom.com.my.",correct:true},
        {text:"Write down your anger in social media.",correct:false},
        {text:"Cry to your friend.",correct:false},
        {text:"Reporting to the unauthorized agency.",correct:false},
        ]

    },
    {
        question:"Which country is ranked number 1 in fraud in the world?",
        answers:[
            {text:"India.",correct:false},
            {text:"Malaysia.",correct:false},
            {text:"China.",correct:false},
            {text:"Nigeria.",correct:true},
            ]
    
    },
    {
        question:"If someone comes to your door step offering a great opportunity to invest in a new company, what should you do?",
        answers:[
            {text:"Listen to the sales pitch because the person is legitimate.",correct:false},
            {text:"Tell the person to leave, as you are not interested.",correct:true},
            {text:"Listen as a sign of courtesy, although you are not interested.",correct:false},
            {text:"Sign up for the investment and tell your friends also to join.",correct:false},
            ]
    
    },
    {
        question:"Which of the following is NOT a way to avoid identity theft? [Identity theft is the crime of using the personal or financial information of another person to commit fraud, such as making unauthorized transactions or purchases.]",
        answers:[
            {text:"Maintain accurate records of all financial transactions.",correct:false},
            {text:"View a copy of your credit report often.",correct:false},
            {text:"Throw away receipts and statements containing private information.",correct:true},
            {text:"Check your financial information regularly.",correct:false},
            ]
    
    },
    {
        question:"An intentional effort to deceive another individual for personal gain is?",
        answers:[
            {text:"Fraud.",correct:true},
            {text:"Mean people.",correct:false},
            {text:"Fake.",correct:false},
            {text:"Crime.",correct:false}, 
            ]
    
    },
    {
        question:"What you should do NOT if you have been scammed?",
        answers:[
            {text:"Do not panic.",correct:false},
            {text:"Make a police report and file a complaint with the relevant authorities.",correct:false},
            {text:"Cancel future transactions. Do not make any further payments with the hope that you will get your money back.",correct:false},
            {text:"Tell this story to your friends and wait him/her to help you to settle.",correct:true},
            ]
    
    },
    {
        question:"Which are the characteristics of current investment scams perpetrated?",
        answers:[
            {text:"Schemes are promoted as an “Limited Time Only” opportunity.",correct:false},
            {text:"Use credentials of celebrities and prominent personalities to entice investors.",correct:false},
            {text:"All of the above are correct.",correct:true},
            {text:"Get victims to part with more money in the pretext of income tax payment and miscellaneous fees.",correct:false},
            ]
    
    },
    {
        question:"All are the high risk investment in Malaysia, EXCEPT?",
        answers:[
            {text:"Cryptocurrency.",correct:false},
            {text:"Fixed Deposit.",correct:true},
            {text:"Fiat Currency.",correct:false},
            {text:"Peer-to-Peer (P2P) Lending.",correct:false},
            ]
    
    },
    {
        question:"Which of the following is NOT the criterias we are looking for when doing research for investment??",
        answers:[
            {text:"Ambassador of the company.",correct:true},
            {text:"SC's Investor Alert List.",correct:false},
            {text:"Licensed Entities/Individuals.",correct:false},
            {text:"Registered Recognized Market Operators/Regulated Fintech Players.",correct:false},
            ]
    
    },
    
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const pointsElement = document.getElementById("point-value");
const h1Element=document.getElementById("title");
const redirectIndexButton = document.createElement("button");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    pointsElement.textContent = score;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion() {
    // Clear previous answer buttons
    answerButtons.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    h1Element.innerHTML = "Question " + questionNo;
    questionElement.innerHTML =  currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)

}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score += 10;
        pointsElement.textContent = score;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score/10} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";

    // Create the "See My Ranking" button
    const seeRankingButton = document.createElement("button");
    seeRankingButton.textContent = "See My Ranking";
    seeRankingButton.classList.add("next-btn"); // Add a custom class for styling
    answerButtons.appendChild(seeRankingButton);

    // Add event listener to the "See My Ranking" button
    seeRankingButton.addEventListener("click", () => {
        window.location.href = 'QuizRanking - Copy.html'; // Redirect to index.html
    });

    // Display the "Play again" button
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();

const redirectButton = document.getElementById("redirect-btn");
redirectButton.addEventListener("click", () => {
    window.location.href = 'QuizVoucher - Copy.html'; // Redirect to voucher.html
});