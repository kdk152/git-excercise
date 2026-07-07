function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add očekuje brojeve");
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("subtract očekuje brojeve");
  }
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
