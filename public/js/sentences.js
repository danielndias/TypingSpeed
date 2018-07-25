
function randomSentence() {
    $('#spinner').show();
    $.get('http://localhost:3000/sentences', changeSentence)
    .fail(function(){
        $('.error').show();
    })
    .always(function() {
    $('#spinner').hide();

    })
}

function changeSentence(data) {
    let sentence = $('.sentence');
    let randomPositon = Math.floor(Math.random() * 10);
    sentence.text(data[randomPositon].quote);

    // Update Sentence Number
    updateSentenceWordCount();

    // Update allowed time
    gameTime = data[randomPositon].time
    updateTimer(gameTime);

}