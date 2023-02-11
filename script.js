 // formula: Math.random()*(3-1) + 1;

 console.log("javaScript is running")

 let computer_output = document.getElementById("computer-output")
 let user_output = document.getElementById("user-output")
 let result = document.getElementById("result")
 let reason = document.getElementById("description")
 
 
 const computerChoise = ()=>{
     // generating random number 
     
     let randomNum = Math.round(Math.random()*2)
     let array = ['image/Rock.png', 'image/Paper.png', 'image/Scissors.png'];

     //changing image of computer choise
     computer_output.src = array[randomNum]
     console.log(array[randomNum])

     return randomNum; // it return the random number that array used in there index just now.
     
 }

 // Cheching win or loss condition 
 const isWin = (userChoise, computerChoise) =>{

         // rock = 0, paper = 1, scissor = 2

             if(userChoise === computerChoise)
                 {result.innerHTML = "Game Tie 🤐"
                 reason.innerHTML =  "You Both are same 😂"
                 }

             else if( userChoise === 0 && computerChoise === 1)
                { result.innerHTML =  "Sorry😒, You LOSE."
                 reason.innerHTML =  "Paper covers rock"}
                 
                 else if(userChoise === 0 && computerChoise === 2)
                 {result.innerHTML =  "Congratulations🎊, You WIN."
                 reason.innerHTML = "Rock breaks scissors"}
                 
                 else if(userChoise === 1 && computerChoise === 0)
                 {result.innerHTML =  "Congratulations🎊, You WIN."
                 reason.innerHTML =  "Paper covers rock"}
                 
                 else if(userChoise === 1 && computerChoise === 2)
                 {
                 result.innerHTML =  "Sorry😒, You LOSE."
                 reason.innerHTML = "Scissors cuts paper"}
                 
                 else if(userChoise === 2 && computerChoise === 0)
                { result.innerHTML =  "Sorry😒, You LOSE."
                 reason.innerHTML = "Rock breaks scissors"}
                 
                 else if(userChoise === 2 && computerChoise === 1)
               {  result.innerHTML =  "Congratulations🎊, You WIN."
                 reason.innerHTML = "Scissors cuts paper"}
                 
 }

 const onRock = () => {
     user_output.src = "image/Rock.png"
         //calling computer's random choise
         computerChoise();
         isWin(0, computerChoise())
 }
 const onPaper = () => {
     user_output.src = "image/Paper.png"
         //calling computer's random choise
         computerChoise();
         isWin(1, computerChoise())
 }
 const onScissors = () => {
     user_output.src = "image/Scissors.png"
         //calling computer's random choise
         computerChoise();
         isWin(2, computerChoise())
 }