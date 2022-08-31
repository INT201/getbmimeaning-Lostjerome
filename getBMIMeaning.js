const { template } = require("@babel/core");

function calculateBMI(weight, height) {
  return weight / (height * height);
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height);
  switch (bmi) {
    case bmi < 18.5:
      return "Underweight";
    case 18.5 >= bmi <= 25:
      return "Normal weight";
    case bmi > 25:
      return "Overweight";
    default:
      return "Error";
  }
}
module.exports = getBMIMeaning;
