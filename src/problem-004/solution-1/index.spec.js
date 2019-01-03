const { expect } = require('chai')
const {
  solve,
  swap,
  movePositivesToTheRight
} = require('.')

describe('Problem #4 - solution 1', () => {
  describe('solve()', () => {
    describe('When input is [3, 4, -1, 1]', () => {
      it('should return 2', () => {
        expect(solve([3, 4, -1, 1])).to.equal(2)
      });
    });
  
    describe('When input is [1, 2, 0]', () => {
      it('should return 3', () => {
        expect(solve([1, 2, 0])).to.equal(3)
      });
    });
  
    describe('When input is [-1, -2, -3]', () => {
      it('should return 1', () => {
        expect(solve([-1, -2, -3])).to.equal(1)
      });
    });
  
    describe('When input is []', () => {
      it('should return 1', () => {
        expect(solve([])).to.equal(1)
      });
    });
  
    describe('When input is has duplicates', () => {
      it('should return correctly', () => {
        expect(solve([4, 2, 2, 2, 2, 1])).to.equal(3)
      });
    });
  });

  describe('swap()', () => {
    it('should return the array with the swapped indexes', () => {
      const actual = swap([4, 2, 2, 1], 0, 3)
      expect(actual).to.deep.equal([1, 2, 2, 4])
    });
  });

  describe('movePositivesToTheRight()', () => {
    it('should return the array with the swapped indexes', () => {
      const actual = movePositivesToTheRight([1, 0, 7, -2, -1])
      expect(actual).to.deep.equal([ -1, 0, -2, 7, 1 ])
    });
  });
});