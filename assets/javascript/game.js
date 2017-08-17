
// function to tell the script to wait until DOM is loaded before running this code
$(document).ready(function(){
//Global Varible 
var loss = 0;
var win = 0;
var randomNum = Math.floor(Math.random() * (102)+ 19);
var gemArray = [];
var total = 0;
	// generating a random value for the gems

	function gemFunc() {

		for (var i = 0; i < 4; i++){

		var gem = Math.floor(Math.random() * 12) + 1 ;
		
		gemArray.push(gem);
	}	
	}

	// calling random value function
	
	gemFunc();

   $(".numberToMatch").html(randomNum);

// grabbing element Id to display value to the DOM on click

function outputScore(element, index){	

	$(element).on("click", function(){
//take the value and push it to total score

	var gem = gemArray[index];
	
	total = total + gem;
			
	$(".score").html(total);
	
	compScore();
	
});
}
// calling outputScore function with all parameters
outputScore(".gem1", 0);
outputScore(".gem2", 1);
outputScore(".gem3", 2);
outputScore(".gem4", 3);

// function checking if the user has won or not
	function compScore() {
		if(randomNum === total) {
			
			$("#winlossmessage").html("You win!!");
			
			win++;
			
			$("#wins").html(win);
			
			restart();
			
		}
		else if(randomNum < total){
			
			$("#winlossmessage").html("You lose.");
			
			loss++;
			
			$("#losses").html(loss);
			
			restart();

		}
		// function resets all variables and creates a new random word
		function restart() {
			
			gemArray = [];
			
			gemFunc();
			
			randomNum = Math.floor(Math.random() * (102)+ 19);
			
			$(".numberToMatch").html(randomNum);
			
			total = 0;
			
			$(".score").html(total);
			
			$("#winlossmessage").html("");
			
		}
	}



});




