var gameTime = 3;
var userInputField = $('#userInput');

$(function() {
    $('#timeLeft').text(gameTime);
    userInputField.on("input", updateTypedInfo);
    $('#restartButton').click(startGame);
    updateSentenceNumber();
    startGame();
})



function updateSentenceNumber() {
    $('#numberOfWords').text($(".sentence").text().split(" ").length);
}

function updateTypedInfo() {
    var typed = userInputField.val();

    var typedCharacters = typed.length;
    $('#typedCharacters').text(typedCharacters);

    var typedWords = typed.split(/\S+/g).length - 1;
    $('#typedWords').text(typedWords);

    checkStatus(typed);
}

function startGame() {
    timeLeft = gameTime;
    userInputField.attr("disabled", false);
    userInputField.val('');
    $('#timeLeft').text(timeLeft);
    $('#typedCharacters').text(0);
    $('#typedWords').text(0);
    userInputField.removeClass("disabledBox"); 
    userInputField.removeClass("wrong");
    userInputField.removeClass("right");
    $('#restartButton').attr("disabled", true);
    userInputField.one("focus", function() {
        startClock()
    })
}

function startClock() {
    decreaseTime = setInterval(function() {
        $('#timeLeft').text(this.timeLeft--);
        if (this.timeLeft < 0) {
            clearInterval(decreaseTime);
            userInputField.attr("disabled", true);
            $('#restartButton').attr("disabled", false);
            userInputField.addClass("disabledBox");
        }
    }, 1000);
}

function checkStatus(typed) {
    var comparableSentence = $('.sentence').text().substr(0, typed.length);

    var isRight = (typed == comparableSentence);

    userInputField.toggleClass("right", isRight);
    userInputField.toggleClass("wrong", !isRight);
}