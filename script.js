function checkAnswer(){
    var opt1 = document.getElementById("option1").checked;
    var opt2 = document.getElementById("option2").checked;
    var opt3 = document.getElementById("option3").checked;
    if(opt1== true){
        alert("Unlucky, try again!");
    }
    else if (opt2 == true){
        alert("Well Done! I have never met a US President (however I have met a Prime Minister)")
    }
    else if (opt3 == true){
        alert("Nah, believe it or not I cannot whistle (sad i know)!")
    }
    else{
    }

}