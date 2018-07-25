var gameTime;
var userInputField = $('#userInput');


$(function() {

    // Generate a random sentence
    randomSentence();

    // Initate the listeners
    userInputField.on("input", updateTypedInfo);
    $('#scoreButton').click(showScoreBoard);
    $('#questionButton').click(randomSentence);
    $('#restartButton').click(startGame);
    $('#syncButton').click(syncScoreBoard);

    // Starting game
    startGame();

    // Update the scoreboard with the data from JSON file.
    updateScore();

    $('.userSelect').selectize({
        create: true,
        sortField: 'text'
    });

    $('.tooltip').tooltipster({
        trigger: 'custom'
    });
})

function updateSentenceWordCount() {
    $('#numberOfWords').text($(".sentence").text().split(" ").length);
}

function updateTimer(allowedTime) {
    $('#timeLeft').text(allowedTime);
}

function updateTypedInfo() {

    // Get the content from textarea
    var typed = userInputField.val();

    // Get the number of characters typed
    var typedCharacters = typed.length;
    $('#typedCharacters').text(typedCharacters);

    // Get the number of words typed
    var typedWords = typed.split(/\S+/g).length - 1;
    $('#typedWords').text(typedWords);

    // Calls checkStatus() to verify is what the player typed is right
    checkStatus(typed);
}

function startGame() {

    updateSentenceWordCount();

    //Enable and reset textarea
    userInputField.attr("disabled", false);
    userInputField.val('');

    // Set the allowed time
    $('#timeLeft').text(gameTime);

    // Reset the characters and words typed counter
    $('#typedCharacters').text(0);
    $('#typedWords').text(0);

    // Remove classes that indicates game status
    userInputField.removeClass("disabledBox"); 
    userInputField.removeClass("wrong");
    userInputField.removeClass("right");

    // Disable restart game button
    $('#restartButton').attr("disabled", true);

    // Start the timer when the player put the focus in the textarea
    userInputField.one("focus", function() {
        startClock()
    })
}

function startClock() {

    let timeLeft = gameTime;

    //Decrease the allowed time by 1 every second
    decreaseTime = setInterval(function() {
        $('#timeLeft').text(timeLeft--);

        // Check if the time is over. If so, stop the timer and call finishGame()
        if (timeLeft < 0) {
            clearInterval(decreaseTime);
            finishGame();
        }
    }, 1000);
}

function finishGame() {

    // Disable the textarea
    userInputField.attr("disabled", true);
    userInputField.addClass("disabledBox");

    // Enable restart button
    $('#restartButton').attr("disabled", false);

    // Insert the player score into the scoreboard
    insertScore();
}

/**
 * Check each letter the player types and set the border color 
 * to indicate if they are right or wrong
 */
function checkStatus(typed) {
    let comparableSentence = $('.sentence').text().substr(0, typed.length);

    let isRight = (typed == comparableSentence);

    userInputField.toggleClass("right", isRight);
    userInputField.toggleClass("wrong", !isRight);
}

