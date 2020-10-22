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
  index = 0;
  powerTotal = 1;
  while (index < n) {
    powerTotal = multiply(powerTotal, x);
    index++;
  }
  return powerTotal;
}

console.log(add(2, 2));
console.log(multiply(5, 5));
console.log(multiply(10, 10));
console.log(power(4, 2));

// Factorial

console.log("Factorial");

function factorial(a) {
  count = a;
  result = 1;
  while (count > 1) {
    result = multiply(result, count);
    count--;
    console.log(count);
  }
  return result;
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

//Fibonacci

console.log("Fibonacci");

function fibonacci(n) {
  count = 1;
  sum1 = 0;
  sum2 = 1;
  sumTotal = 0;
  while (count < n) {
    sumTotal = add(sum1, sum2);
    sum1 = sum2;
    sum2 = sumTotal;

    count++;
    // console.log(count);
    // console.log(sumTotal);
  }
  return sumTotal;
}
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
