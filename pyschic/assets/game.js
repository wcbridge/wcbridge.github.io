  

        var letter = ["a", "b", "c", "d", "e", "f", "g",
                      "h", "i", "j", "k", "l", "m", "n", 
                      "o", "p", "q", "r", "s", "t", "u", 
                      "v", "w", "x", "y", "z"];

        // outcomes
        var wins = 0;
        var chances = 8;
        var loss = 0

        

        document.onkeyup = function (event) {
            var userGuess = event.key;
           
            //
            

            var computerPick = letter[Math.floor(Math.random() * letter.length)];

            if (userGuess === computerPick) {
                wins++
            }
            else {
                chances--
            }

            if (chances < 0) {
                loss++
               chances = 8
        
            }

         
            var html =
                "<p>You chose: " + userGuess + "</p>" +
              // useful "<p>The computer chose: " + computerPick + "</p>" +
                "<p>wins: " + wins + "</p>" +
                "<p>chances: " + chances + "</p>"+
                "<p> loss:" + loss + "</p>";


            document.querySelector("#game").innerHTML = html;


        } // closing {} of document.onkeyup = function(event)
   