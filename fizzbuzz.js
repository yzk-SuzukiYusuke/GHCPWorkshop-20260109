// Minimal, readable FizzBuzz implementation for 1..20 example

// Get FizzBuzz result for a single number
function getFizzBuzzValue(num) {
  let out = '';
  if (num % 3 === 0) out += 'Fizz';
  if (num % 5 === 0) out += 'Buzz';
  return out || num;
}

function fizzBuzz(n = 20) {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('n must be a positive integer');
  }
  for (let i = 1; i <= n; i++) {
    console.log(getFizzBuzzValue(i));
  }
}

if (require.main === module) {
  fizzBuzz(20);
}

module.exports = {fizzBuzz, getFizzBuzzValue};
