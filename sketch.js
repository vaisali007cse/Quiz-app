var database;
var quizState = 0,question,contestant,quiz,result;
var allContestants;
var contCount = 0;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    //question = new Question();
    //question.displayQuestion();

    quiz = new Quiz();
    quiz.getState();
    quiz.start();

}

function draw(){
    background("white");

    if(contCount === 3){
        quiz.updateState(1);
    }

    if(quizState === 1){
        quiz.displayResult();
    }
    
    drawSprites();
}