function add(a, b) {
  console.log(`add pozvan s ${a}, ${b}`);
  return a + b;
}

function subtract(a, b) {
  console.log(`subtract pozvan s ${a}, ${b}`);
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
