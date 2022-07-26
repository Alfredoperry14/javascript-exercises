const ftoc = function(temp) {
  temp -= 32;
  let double = 5/9;
  return parseFloat((temp * double).toFixed(1));
};

const ctof = function(temp) {
  let double = 9/5
  return parseFloat((temp * double + 32).toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
