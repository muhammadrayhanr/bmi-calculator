function calculateBMI() {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let bmi = weight / Math.pow(height / 100, 2);
  let result = document.getElementById('result');
  if (bmi < 18.5) {
    result.innerHTML = 'Your BMI is ' + bmi.toFixed(1) + ' which means you are Underweight.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = 'Your BMI is ' + bmi.toFixed(1) + ' which means you have a Normal weight.';
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = 'Your BMI is ' + bmi.toFixed(1) + ' which means you are Overweight.';
  } else {
    result.innerHTML = 'Your BMI is ' + bmi.toFixed(1) + ' which means you have Obesity.';
  }
}
