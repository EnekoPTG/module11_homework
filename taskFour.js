let numberA = 5;
let numberB = 15;
(function(numberA, numberB) {
	const count = function() {
	  let counter = 0;
	  function count(numA, numB) {
		if (counter === 0) {
		  counter = numA;
		}
		if (counter <= numB) {
		  console.log(counter);
		  counter++;      
		}
	  }
	  return count;
	}();
	const intervalId = setInterval(count, 1000, numberA, numberB);
	setTimeout(function(){
	  clearInterval(intervalId);
	}, ((numberB - numberA + 1)*1000));
})(numberA, numberB);