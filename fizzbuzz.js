// Minimal, readable FizzBuzz implementation for 1..20 example

// Get FizzBuzz result for a single number
function getFizzBuzzValue(num) {
  // Input validation
  if (typeof num !== 'number') {
    throw new TypeError(`Expected number, but got ${typeof num}`);
  }
  if (!Number.isFinite(num)) {
    throw new RangeError('Number must be finite (not NaN or Infinity)');
  }
  if (!Number.isInteger(num)) {
    throw new RangeError(`Expected integer, but got ${num}`);
  }
  if (num < 1) {
    throw new RangeError(`Expected positive integer, but got ${num}`);
  }

  let out = '';
  if (num % 3 === 0) out += 'Fizz';
  if (num % 5 === 0) out += 'Buzz';
  return out || num;
}

function fizzBuzz(n = 20) {
  // Input validation with detailed error messages
  if (typeof n !== 'number') {
    throw new TypeError(`Expected number, but got ${typeof n}`);
  }
  if (!Number.isFinite(n)) {
    throw new RangeError('Number must be finite (not NaN or Infinity)');
  }
  if (!Number.isInteger(n)) {
    throw new RangeError(`Expected integer, but got ${n}`);
  }
  if (n < 1) {
    throw new RangeError(`Expected positive integer (>= 1), but got ${n}`);
  }

  for (let i = 1; i <= n; i++) {
    console.log(getFizzBuzzValue(i));
  }
}

if (require.main === module) {
  fizzBuzz(20);
}

module.exports = {fizzBuzz, getFizzBuzzValue};
