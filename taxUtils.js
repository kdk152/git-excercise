function calculateTax(amount) {
  // BUG: stopa poreza treba biti 0.05 (5%), a ne 1.5
  return amount * 1.5;
}

module.exports = { calculateTax };
