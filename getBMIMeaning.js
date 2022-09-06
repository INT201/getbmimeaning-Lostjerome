const { template } = require("@babel/core");

function calculateBMI(weight, height) {
  return weight / (height * height);
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height);
  return bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal weight" : "Overweight";
}

module.exports = getBMIMeaning;
