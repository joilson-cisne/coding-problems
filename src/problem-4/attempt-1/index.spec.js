const { expect } = require('chai')
const solve = require('.')

describe('Problem #4 - attempt 1', () => {
  describe('When input is [3, 4, -1, 1]', () => {
    it('should return 2', () => {
      expect(solve([3, 4, -1, 1])).to.equal(2)
    });
  });

  describe('When input is [1, 2, 0]', () => {
    it('should return 2', () => {
      expect(solve([1, 2, 0])).to.equal(3)
    });
  });

  describe('When input is [-1, -2, -3]', () => {
    it('should return 2', () => {
      expect(solve([-1, -2, -3])).to.equal(1)
    });
  });

  describe('When input is []', () => {
    it('should return 1', () => {
      expect(solve([])).to.equal(1)
    });
  });
});