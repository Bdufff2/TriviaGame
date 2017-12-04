// create variables
    // number of questions
    // number of questions answered
    // time remaining

// opening screen should show when user first lands at the page
$(document).ready(function) {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".quizArea").html(startScreen);
}

// click start button to begin game and form appears
// create form style questions (user can only choose one selection)


// "submit" button to end game early if user completes quiz faster than time allotted
// after game timer runs out show results of the game (correct answers/incorrect/unanswered)