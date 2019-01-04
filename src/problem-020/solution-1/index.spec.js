const { expect } = require('chai')
const { solve } = require('.')

describe('Problem #20 - solution 1', () => {
  describe('solve()', () => {
    it('should return ...', () => {
      const list1 = {
        val: 100,
        next: {
          val: 3,
          next: {
            val: 7,
            next: {
              val: 8,
              next: {
                val: 10
              }
            }
          }
        }
      }

      const list2 = {
        val: 1,
        next: {
          val: 8,
          next: {
            val: 10
          }
        }
      }

      expect(solve(list1, list2)).to.equal(8)
      expect(solve(list2, list1)).to.equal(8)
    });
  });
});