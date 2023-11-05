var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern= [];
var toggle=false;
var level=0;
$(window).keydown(function (event) {
    if (!toggle) { 
        toggle = true;
        nextSequence();
    }
});
function playsound(input){
    var audio=new Audio('sounds/'+input+'.mp3');
audio.play();
}
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    }
)
function checkAnswer(currentlevel){
if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playsound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function nextSequence(){
    userClickedPattern = [];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChoosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
$("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomChoosenColour);
level++;
$("h1").text("Level "+level);
}



function animatePress(currentColour){
$('#'+currentColour).addClass("pressed");
setTimeout(function(){
    $('#'+currentColour).removeClass("pressed");
},100)
}
function startOver() {
    level = 0;
    gamePattern = [];
    toggle= false;
  }
  