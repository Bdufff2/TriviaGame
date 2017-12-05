

// create variables
    // Quiz questions array
    // number of questions
    // number of questions answered
    // time remaining
var questionArray = [
    ["Who wrote the Game of Thrones series?", "J. R. R. Tolkien", "C. S. Lewis", "J. K. Rowling", "George R.R. Martin"],
    ["What is Hodor's favorite line?", "'Mmmm pie'", "'Hodor'", "'I dunno'", "'Hold the door!'"],
    ["What Lord Varyss' nickname?", "'The Rat", "'The Fly'", "'The Spider'", "'The Baldy'"],
    ["Which of these characters is a stark?", "Bran", "Jon", "Gendry", "Tommen"],
    ["Who is Jon Snow's mother?", "Catelyn Stark", "Lyanna Stark", "Cersei Lannister", "Melisandre"],
    ["What is the name of the continent ruled by the Iron Throne?", "Northeros", "Southeros", "Easteros", "Westeros"],
    ["What is Sandor Clegane's nickname?", "The Wolf", "The Bear", "The Hound", "The Mountain"]
];


// opening screen should show when user first lands at the page
$(document).ready(function(){
    startScreen = "";
	$(".quizArea").html(startScreen);
});

// click start button to begin game and form appears
// create form style questions (user can only choose one selection)


// "submit" button to end game early if user completes quiz faster than time allotted
// after game timer runs out show results of the game (correct answers/incorrect/unanswered)