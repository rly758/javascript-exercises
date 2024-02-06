const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) / 1.8;
  return tempC == 0 ? 0 : +tempC.toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * 1.8) + 32;
  return tempF == 0 ? 0 : +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
