const { expect } = require('chai')
const { cons, car, cdr } = require('.')

describe('Problem #5 - solution 1', () => {
  describe('car()', () => {
    it('should return the first item', () => {
      expect(car(cons(1, 4))).to.equal(1)
      expect(car(cons(2, 4))).to.equal(2)
      expect(car(cons(3, 4))).to.equal(3)
      expect(car(cons(4, 4))).to.equal(4)
    });
  });

  describe('cdr()', () => {
    it('should return the second item', () => {
      expect(cdr(cons(3, 1))).to.equal(1)
      expect(cdr(cons(3, 2))).to.equal(2)
      expect(cdr(cons(3, 3))).to.equal(3)
      expect(cdr(cons(3, 4))).to.equal(4)
    });
  });
});