const { expect } = require('chai')
const solve = require('.')

describe('Problem 1 - Solution 1', () => {
  describe('Should return true', () => {
    it('when array is [10, 15, 3, 7] and k is 17', () => {
      checkTrueReturnFor([10, 15, 3, 7], 17)
    });
    
    it('when array is [1, 2, 3, 4] and k is 6', () => {
      checkTrueReturnFor([1, 2, 3, 4], 6)
    });
  });

  describe('Should return false', () => {
    it('when array is [10, 15, 3] and k is 17', () => {
      expectFalseReturnFor([10, 15, 3], 17)
    });

    it('when array is [1, 3] and k is 2', () => {
      expectFalseReturnFor([1, 3], 2)
    });

    it('when array is empty', () => {
      expectFalseReturnFor([], 'whatever')
    });

    it('when array is [2, 2, 2, 2] and k is 2', () => {
      expectFalseReturnFor([2, 2, 2, 2], 2)
    });
  });
});

/**
 * Help functions
 * */

const checkTrueReturnFor = (numbers, k) => {
  checkFor(numbers, k, true)
}

const expectFalseReturnFor = (numbers, k) => {
  checkFor(numbers, k, false)
}

const checkFor = (numbers, k, expected) => {
  // Act
  const actual = solve(numbers, k)
    
  // Assert
  expect(actual).to.equal(expected)
}