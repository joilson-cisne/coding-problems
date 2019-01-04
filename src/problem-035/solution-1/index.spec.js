const { expect } = require('chai')
const { solve } = require('.')

describe('Problem #35 - solution 1', () => {
  describe('solve()', () => {
    it('should return the input array on the right order', () => {
      expect(solve(['G', 'B', 'R'])).to.deep.equal(['R', 'G', 'B'])
      expect(solve(['G', 'B', 'R', 'G', 'R'])).to.deep.equal(['R', 'R', 'G', 'G', 'B'])
      expect(solve(['G', 'B', 'R', 'G', 'R'])).to.deep.equal(['R', 'R', 'G', 'G', 'B'])
      expect(solve(['G', 'B', 'R', 'R', 'B', 'R', 'G'])).to.deep.equal(['R', 'R', 'R', 'G', 'G', 'B', 'B'])
    });
  });
});