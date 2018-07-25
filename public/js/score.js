function insertScore() {
    let scoreBoard = $('.scoreBoard').find('tbody');
    
    var username = $('.userSelect').val();
    var wordCount = $('#typedWords').text();

    let newScore = createLine(username, wordCount)
    scoreBoard.prepend(newScore);
    
    newScore.find('.removeScore').click(removeLine);

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

function syncScoreBoard() {
    var scoreBoard = [];
    var lines = $('tbody>tr');
    lines.each(function() {
        let user = $(this).find('td:nth-child(1)').text();
        let words = $(this).find('td:nth-child(2)').text();     
        
        var currentScore = {
            user: user,
            points: words
        }

        scoreBoard.push(currentScore);
    });
    
    var dataToInsert = {
        score: scoreBoard
    }

    $.post("http://localhost:3000/score",dataToInsert, function() {
        $('.tooltip').tooltipster('open').tooltipster('content', 'Successfully Syncronyzed');;
    }).fail(function() {
        $('.tooltip').tooltipster('open').tooltipster('content', 'Synchronization Failed');
    })
    
    .always(function() {
        setTimeout(function() {
            $('.tooltip').tooltipster('close');
        }, 2000);    
    });
}

function updateScore() {
    $.get('http://localhost:3000/score', function(data) {
        $(data).each(function() {
            let line = createLine(this.user, this.points);
            line.find('.removeScore').click(removeLine);
            $('tbody').append(line);
        })
    })
}
