console.log("JS Katas Collection: Functions 2");

console.log("Add Function");
// Add Function

function add(a, b) {
  return a + b;
}
console.log(add(2, 4));

// Multiply Function

console.log("Multiply");

function multiply(c, y) {
  count = 0;
  timesTotal = 0;
  while (count < y) {
    timesTotal = add(timesTotal, c);
    count++;
  }
  return timesTotal;
}
console.log(add(3, 3));
console.log(multiply(6, 4));

console.log("Power/Exponation");

// Power Exponation

function power(x, n) {
  count = 0;
  powerTotal = 0;
  while (count < n) {
    powerTotal = multiply(x, n);
    count++;
  }
  return powerTotal;
}

console.log(add(2, 2));
console.log(multiply(5, 5));
console.log(multiply(10, 10));
console.log(power(5, 2));
