

// count from 1 to 100. If i = multiple of 3 i%3 === 0 then say "FIZZ" if i%5 === 0 say BUZZ. 

function fizzBuzz(){
	for(i=1;i<=100;i++){
		if(i%3 == 0 && i%5 == 0){
			$("#fizzList").append("<li>fizzbuzz</li>");
			var fizz = "fizzbuzz";
		} else if (i%3 === 0){
			$("#fizzList").append("<li>fizz</li>");
			var fizz = "fizz";
		} else if (i%5 == 0){
			$("#fizzList").append("<li>buzz</li>");
			var fizz = "buzz";
		} else {
			$("#fizzList").append("<li>" + i + "</li>");
			var fizz = i;
		}
		console.log(fizz);
	}
};


$(document).ready(function(){
	fizzBuzz();
});