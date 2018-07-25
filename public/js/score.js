function insertScore() {
    let scoreBoard = $('.scoreBoard').find('tbody');
    
    var username = 'Daniel';
    var wordCount = $('#typedWords').text();

    let newScore = createLine(username, wordCount)
    scoreBoard.prepend(newScore);
    
    $('.removeScore').click(removeLine);

    $('.scoreBoard').slideDown(500);
    scrollScoreBoard();
}

function scrollScoreBoard() {

    //Get the ccore board current position
    var scoreBoardPosition = $('.scoreBoard').offset().top;

    // Scroll the screen to the score board position
    $('html, body').animate({ 
        scrollTop: scoreBoardPosition + 'px'
    }, 1000);
}

function removeLine(event) {

    //Prevent from going to the top of the page
    event.preventDefault();

    // Get the table line
    let line = $(this).parent().parent();

    // Remove the line with a fade out animation
    line.fadeOut(1000);
    setTimeout(function() {
        line.remove();
    }, 1000);
}

function createLine(username, wordCount) {

    // Create the new Table Line
    let newLine = $('<tr>');
    let userColumn = $('<td>').text(username);
    let wordColumn = $('<td>').text(wordCount);
    let removeColum = $('<td>');
    let removeColumLink = $('<a>').addClass('removeScore').attr('href', '#');
    let removeColumIcon = $('<i>').text('delete').addClass('material-icons');

    //Insert the new Table Line in DOM
    removeColumLink.append(removeColumIcon);
    removeColum.append(removeColumLink);
    newLine.append(userColumn);
    newLine.append(wordColumn);
    newLine.append(removeColum);

    // Return New Line
    return newLine;
}

function showScoreBoard() {
    $('.scoreBoard').stop().slideToggle(1000);
}