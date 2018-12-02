const { expect } = require('chai')
const solve = require('.')

describe('Problem 2 - Solution 1', () => {
  it('when input is [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24]', () => {
    expect(solve([1, 2, 3, 4, 5])).to.be.deep.equal([120, 60, 40, 30, 24])
  });
  
  it('when input is [3, 2, 1] should return [2, 3, 6]', () => {
    expect(solve([3, 2, 1])).to.be.deep.equal([2, 3, 6])
  });

  it('when input is [] should return []', () => {
    expect(solve([])).to.be.deep.equal([])
  });

  it('when input is [10] should return [1]', () => {
    expect(solve([10])).to.be.deep.equal([1])
  });

  it('when input is [10, 10 ,10] should return [100, 100, 100]', () => {
    expect(solve([10, 10, 10])).to.be.deep.equal([100, 100, 100])
  });
});
