player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    char2 = word.charAt(Math.floor(word.length / 2));
    console.log(char2);

    char3 = word.charAt(word.length - 1);
    console.log(char3);

    remove_char1 = word.replace(char1, "_");
    remove_char2 = remove_char1.replace(char2, "_");
    remove_char3 = remove_char2.replace(char3, "_");
    console.log(remove_char3);
    question_word = "<h4 id='word_display'> Q." + remove_char3 + "</h4>";
    inputbox = "<br> Answer- <input id='input_checkbox'> ";
    checkbutton = "<br><br><button onclick='check()' class='btn-info'>Check</button>";
    row = question_word + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
var question_turn = "player_1";
var answer_turn = "player_2";
function check() {
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    if (answer == word) {
        if (answer_turn = "player_1") {
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn == "player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question_turn"+ player2_name;
    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question_turn"+ player1_name;
    }
    if(answer_turn == "player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer_turn"+ player2_name;
    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer_turn"+ player1_name;
    }
}