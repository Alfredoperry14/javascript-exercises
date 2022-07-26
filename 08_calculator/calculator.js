const add = function(...args) {
  let total = 0;
    for(let i = 0; i < args.length; i++){
      total += args[i];
    }
    return total;
};

const subtract = function(...args) {
  return args[0] - args[1];  
};

const sum = function(...args) {
  let total = 0;
	for(let i = 0; i < args[0].length; i++){
    total += args[0][i];
  }
  return total;
};

const multiply = function(...args) {
  let total = 0 + args[0][0];
  for(let i = 1; i < args[0].length; i++){
    total *= args[0][i];
  }
  return total;
};

const power = function(num, power) {
    let total = num;
  for(let i = 1; i < power; i++){
      total *= num;
  }
  return total;
};

const factorial = function(num) {
	let ans = 1;
  for(let i = 1; i <= num; i++)
    ans *= i; 
  return ans;
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
