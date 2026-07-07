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
  // Ispravak: izbjeći artefakte pomičnog zareza, zaokruži na 6 decimala
  return Math.round((a / b) * 1e6) / 1e6;
}

module.exports = { add, subtract, multiply, divide };
