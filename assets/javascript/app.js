
var questions = [
    {
        prompt: "What year was the Arctic Monkeys formed?\n(a) 1993\n(b) 2001\n(c) 2002",
        answer: "c"
    },
    {
        prompt: "What is the title of their debut album?\n(a) AM\n(b) Whatever People Say I Am, That's What I'm Not\n(c) Humbug",
        answer: "b"
    },
    {
        prompt: "Where are the Arctic Monkeys from?\n(a) Sheffield\n(b) London\n(c) Manchester",
        answer: "a"
    },

]

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}




// $(document).ready(function(){

//     $("#remaining-time").hide();
//     $("#start").on("click", trivia.startGame);
//     $(document).on("click", ".option", trivia.guessChecker);

// })

// var trivia = {
//     correct: 0,
//     incorrect: 0,
//     currentSet: 0,
//     timer: 20,
//     timerOn: false,
//     timerId: " ",

//     questions: {
//         q1: "What year was the Arctic Monkeys formed?",
//         q2: "What is the title of their debut album?",
//         q3: "Where are the Arctic Monkeys from?",
//     },

//     options: {
//         q1: ["1993", "2001", "2009", "2002"],
//         q2: ["Whatever People Say I Am, That's What I'm Not", "Humbug", "Suck It and See", "AM"],
//         q3: ["London", "Sheffield", "Manchester", "Los Angeles"] 
//     },
    
//     answers: {
//         q1: "2002",
//         q2: "Whatever People Say I Am, That's What I'm Not",
//         q3: "Sheffield"
//     },

// startGame: function(){

//     trivia.currentSet = 0;
//     trivia.correct = 0;
//     trivia.incorrect = 0;
//     clearInterval(trivia.timerId);

//     $("#game").show();

//     $("#results").html(" ");

//     $("#timer").text(trivia.timer);

//     $("#start").hide();

//     $("#remaining-time").show();

//     trivia.nextQuestion();

// },

// nextQuestion: function(){

//     trivia.timer = 10;
//     $("#timer").removeClass("last-seconds");
//     $("#timer").text(trivia.timer);

//     var questionContent = Object.values(trivia.questions)[trivia.currentSet];
//     $("question").text(questionContent);

//     var questionOptions = Object.values(trivia.options)[trivia.currentSet];

//     $.each(questionOptions, function(index, key){
//         $("#options").append($("<button>"+key+"</button>"));
//     })

// },

// timerRunning: function(){
//     if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
//         $("#timer").text(trivia.timer);
//         trivia.timer--;
//         if(trivia.timer === 4){
//             $("#timer").addClass("last-seconds");
//         }
//     }

//     else if(trivia.timer === -1){
//         trivia.unanswered++;
//         trivia.result = false;
//         clearInterval(trivia.timerId);
//         resultId = setTimeout(trivia.guessResult, 1000);
//         $("#results").html("<h3>Oops out of time! The answer is " + Object.values(trivia.answers)[trivia.currentSet] + "</h3>");
//     }

//     else if(trivia.currentSet ===  Object.keys(trivia.questions).length){

//         $("#results")
//             .html("<h3>Thanks for playing!</h3>"+
//             "<p> Correct: "+ trivia.correct +"</p"+
//             "<p> Incorrect: "+ trivia.incorrect +"</p"+
//             "<p>Try again!</p");

//         $("#game").hide();

//         $("#start").show();

//     }
// },

// guessChecker : function() {

//     var resultId;

//     var currentAnswer =  Object.values(trivia.answers)[trivia.currentSet];

//     if($(this).text() === currentAnswer){
//         trivia.correct++;
//         clearInterval(trivia.timerId);
//         resultId =  setTimeout(trivia.guessResult, 1000);
//         $("#results").html("<h3>Correct!</h3>");
//     }

//     else {
//         trivia.incorrect++;
//         clearInterval(trivia.timerId);
//         resultId =  setTimeout(trivia.guessResult, 1000);
//         $("#results").html("<h3>Try again! "+ currentAnswer +"</h3>");
//     }

// },

// guessResult : function(){

//     trivia.currentSet++;

//     $(".option").remove();
//     $("#results h3").remove();

//     trivia.nextQuestion();
//     }

// }
