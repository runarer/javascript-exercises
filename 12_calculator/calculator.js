const add = function(a,b) {
  return a + b;	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((acc,number) => acc + number, 0)
};

const multiply = function(numbers) {
  if (numbers.length < 1) return 0;
  return numbers.reduce( (acc,number) => acc*number,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(size) {
	let answer = 1
  for (let i = 1; i <= size; i++) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
