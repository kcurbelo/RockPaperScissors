

function rps(userChoice) {

	// To get html elements and set them ad userChoice 
// alert(userChoice);



	//computer choice 
	// var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} console.log("Computer: " + computerChoice);
	//comparing the choices 
	function compare(choice1, choice2) {
		 if(choice1 === choice2){
		  return "The result is a tie!" ;   
		 }
		 else if(choice1 === "rock") {
		   if(choice2 === "scissors") {
		    return "rock wins" ; 
		     }  
		 else {
		    return "paper wins";
		     }   
		 }
		 else if(choice1 === "paper") {
		  if(choice2 === "rock") {
		    return "paper wins"
		    }
		 else {
		    return "scissors wins"
		    }
		}
		else if(choice1 === "scissors") {
		    if(choice2 === "paper"){
		      return "scissors wins" 
		    }
		    else { 
		      return "rock wins"
		    }
		}   
		else if(choice1 != "rock","paper","scissors") {
		    prompt("Please put in a new value")
		}
  }//end of compare function 
	alert(compare (userChoice,computerChoice));
}  //End of function




// rps();----> Don't need it when I have it in a button. 
// note 