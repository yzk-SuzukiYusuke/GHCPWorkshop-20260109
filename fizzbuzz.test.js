const {getFizzBuzzValue, fizzBuzz} = require('./fizzbuzz');

describe('FizzBuzz', () => {
  describe('FizzBuzz (both 3 and 5)', () => {
    test('15 should return "FizzBuzz"', () => {
      expect(getFizzBuzzValue(15)).toBe('FizzBuzz');
    });
  });

  describe('Fizz (multiples of 3)', () => {
    test('3 should return "Fizz"', () => {
      expect(getFizzBuzzValue(3)).toBe('Fizz');
    });

    test('6 should return "Fizz"', () => {
      expect(getFizzBuzzValue(6)).toBe('Fizz');
    });

    test('9 should return "Fizz"', () => {
      expect(getFizzBuzzValue(9)).toBe('Fizz');
    });

    test('12 should return "Fizz"', () => {
      expect(getFizzBuzzValue(12)).toBe('Fizz');
    });

    test('18 should return "Fizz"', () => {
      expect(getFizzBuzzValue(18)).toBe('Fizz');
    });
  });

  describe('Buzz (multiples of 5)', () => {
    test('5 should return "Buzz"', () => {
      expect(getFizzBuzzValue(5)).toBe('Buzz');
    });

    test('10 should return "Buzz"', () => {
      expect(getFizzBuzzValue(10)).toBe('Buzz');
    });

    test('20 should return "Buzz"', () => {
      expect(getFizzBuzzValue(20)).toBe('Buzz');
    });
  });

  describe('Other numbers (not multiples of 3 or 5)', () => {
    test('1 should return 1', () => {
      expect(getFizzBuzzValue(1)).toBe(1);
    });

    test('2 should return 2', () => {
      expect(getFizzBuzzValue(2)).toBe(2);
    });

    test('4 should return 4', () => {
      expect(getFizzBuzzValue(4)).toBe(4);
    });

    test('7 should return 7', () => {
      expect(getFizzBuzzValue(7)).toBe(7);
    });

    test('8 should return 8', () => {
      expect(getFizzBuzzValue(8)).toBe(8);
    });

    test('11 should return 11', () => {
      expect(getFizzBuzzValue(11)).toBe(11);
    });

    test('13 should return 13', () => {
      expect(getFizzBuzzValue(13)).toBe(13);
    });

    test('14 should return 14', () => {
      expect(getFizzBuzzValue(14)).toBe(14);
    });

    test('16 should return 16', () => {
      expect(getFizzBuzzValue(16)).toBe(16);
    });

    test('17 should return 17', () => {
      expect(getFizzBuzzValue(17)).toBe(17);
    });

    test('19 should return 19', () => {
      expect(getFizzBuzzValue(19)).toBe(19);
    });
  });

  describe('Failure case (intentional)', () => {
    test('3 should NOT return "Buzz" (expected failure)', () => {
      expect(getFizzBuzzValue(3)).not.toBe('Buzz');
    });
  });

  describe('Input validation for fizzBuzz function', () => {
    // Mock console.log to avoid cluttering test output
    let consoleLogSpy;

    beforeEach(() => {
      consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
      consoleLogSpy.mockRestore();
    });

    test('should accept valid positive integer', () => {
      expect(() => fizzBuzz(5)).not.toThrow();
    });

    test('should throw error for negative number', () => {
      expect(() => fizzBuzz(-1)).toThrow('Expected positive integer');
    });

    test('should throw error for zero', () => {
      expect(() => fizzBuzz(0)).toThrow('Expected positive integer');
    });

    test('should throw error for non-integer', () => {
      expect(() => fizzBuzz(3.5)).toThrow('Expected integer');
    });

    test('should throw error for string', () => {
      expect(() => fizzBuzz('abc')).toThrow('Expected number');
    });

    test('should throw error for null', () => {
      expect(() => fizzBuzz(null)).toThrow('Expected number');
    });

    test('should throw error for NaN', () => {
      expect(() => fizzBuzz(NaN)).toThrow('must be finite');
    });

    test('should throw error for Infinity', () => {
      expect(() => fizzBuzz(Infinity)).toThrow('must be finite');
    });

    test('should use default value 20 when called without argument', () => {
      expect(() => fizzBuzz()).not.toThrow();
      expect(consoleLogSpy).toHaveBeenCalledTimes(20);
    });
  });
});
