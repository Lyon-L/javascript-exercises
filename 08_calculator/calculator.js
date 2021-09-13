const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};

const multiply = function(arr) {
  let result = 1;
  for(let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function(num1, num2) {
	let result = num1 ** num2;
  return result;
};

const factorial = function(num1) {
	let result = 1;

  if (num1 <= 0) {
    result = 1;
  } else {
    for(; num1 !== 0; num1--){
      result *= num1;
    }
  }
  

  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
