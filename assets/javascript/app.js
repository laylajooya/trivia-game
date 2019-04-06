var time = 10;

var countDown;

$("#start").on("click", start);
$(".time-remaining").css("display", "none");
$("#submit").css("display", "none");
$("#questions").css("display", "none");
$("#answers").css("display", "none");



function start(){

    $("#start").hide();
    loadQ();

}

function loadQ(){
    $("#questions").css("display", "block");
    $("#submit").css("display", "inline");
    $(".time-remaining").css("display", "inline");

    $("#submit").on("click", submit);
    countDown = setInterval(decrement, 1000);

   

}

function decrement(){

    time--;
    $("#timer").text(time);

    if(time <= 0){
        stop();
        // $("#start").attr("disabled",false);
        submit();
    }

}

function stop(){

    clearInterval(countDown);
    time = 10;
}

function submit(){

    $("#answers").css("display", "block");
    stop ();
    $("#questions").css("display", "none");
    $("#submit").css("display", "none");

    $(".time-remaining").css("display", "none");


    var trueRadio = $("input:radio[value=true]:checked");
        trueRadio = trueRadio.length;
        $("#correctAns").html(trueRadio);

    var falseRadio = $("input:radio[value=false]:checked");
        falseRadio = falseRadio.length;
        $("#incorrectAns").html(falseRadio);
    
    var unansweredCount = 0;
    for (var i = 0; i <= 3; i++){
        var unanswered = $("input:radio[name=q" + i + "]");
        for (var j = 0; j < unanswered.length; j++){
            if (unanswered[j].checked){
                break;
            } else if (j === unanswered.length - 1){
                unansweredCount++;
            }
        }

        $("#unansweredQ").html(unansweredCount);

    }

}
