var sentence = $(".sentence").text();
var numberOfWords = sentence.split(" ").length;
$('#numberOfWords').text(numberOfWords);

var userInputField = $('#userInput');

userInputField.on("input", function() {

    var typed = userInputField.val();

    var typedCharacters = typed.length;
    $('#typedCharacters').text(typedCharacters);

    var typedWords = typed.split(/\S+/g).length - 1;
    $('#typedWords').text(typedWords);

});

var timeLeft = $('#timeLeft').text();



userInputField.on("focus", function() {
    var decreaseTime = setInterval(function() {
        $('#timeLeft').text(timeLeft--);
        if (timeLeft < 0) {
            clearInterval(decreaseTime);
            userInputField.attr("disabled", true);
        }
    }, 1000);
})