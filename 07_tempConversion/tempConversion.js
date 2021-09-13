const ftoc = function(farDeg) {
  celsius = (farDeg - 32) * 5/9;
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(celsDeg) {
  fahrenheit = (celsDeg * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
