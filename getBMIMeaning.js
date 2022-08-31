const { template } = require("@babel/core");

function calculateBMI(weight, height) {
  return weight / (height * height);
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height);
  let meaning = "";
  switch (bmi) {
    case bmi < 18.5:
      meaning = "Underweight";
      break;
    case 18.5 >= bmi <= 25:
      meaning = "Normal weight";
      break;
    case bmi > 25:
      meaning = "Overweight";
      break;
    default:
      meaning = "Error";
  }
  return meaning;
}
module.exports = getBMIMeaning;
