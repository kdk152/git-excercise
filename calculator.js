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
  if (b === 0) {
    throw new Error("Dijeljenje s nulom");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

function applyDiscount(amount, pct) {
