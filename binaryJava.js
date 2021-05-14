function toBinary() {
    var num = parseInt(document.getElementById("num").value);
    var converter = [];
    var t;


    while(num != 0) {
        var i;
        i = num % 2;
        num = parseInt(num / 2);

        converter.push(i);
    }

    t = converter.reverse();

    document.getElementById("outputBinary").innerHTML = t.join("");
}

function checkPalindrome() {
    var word = document.getElementById("word").value;

    var wordArray = [];
    var palindromeArray = [];
    var i, t;

    word = word.replace(/[^a-zA-Z]/g, "").toLowerCase();


    for(i = 0; i < word.length; i++) {
        wordArray.push(word[i]);
    }

    for(i = wordArray.length - 1; i >= 0; i--){
        palindromeArray.push(wordArray[i]);
    }

    for(i = 0; i <= wordArray.length; i++) {
        console.log(wordArray[i] + "-" + palindromeArray[i]);
    }

    for(i = 0; i <= wordArray.length; i++) {
        if(wordArray[i] != palindromeArray[i]) {
            document.getElementById("outputPalindrome").innerHTML = "NOT A PALINDROME";
            break;
        }
        else {
            document.getElementById("outputPalindrome").innerHTML = "A PALINDROME";
            break;
        }
        
    }



    

    

}