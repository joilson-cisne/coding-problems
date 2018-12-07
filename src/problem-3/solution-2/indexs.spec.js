const { expect } = require('chai')
const { serialize, deserialize, Node } = require('.')

describe('Problem #3 - solution 2', () => {
  describe('serialize(...)', () => {
    describe('When root is Node()', () => {
      it('should return "#"', () => {
        const root = Node()
        expect(serialize(root)).to.equal('#')
      });
    });

    describe('When root is undefined', () => {
      it('should return "#"', () => {
        expect(serialize()).to.equal('#')
      });
    });

    describe('When root is Node("")', () => {
      it('should return "#"', () => {
        const root = Node('')
        expect(serialize()).to.equal('#')
      });
    });

    describe('When root is Node("1")', () => {
      it('should return "1..#..#"', () => {
        const root = Node('1')
        expect(serialize(root)).to.equal('1..#..#')
      });
    });

    describe('When root is Node("125")', () => {
      it('should return "125..#..#"', () => {
        const root = Node('125')
        expect(serialize(root)).to.equal('125..#..#')
      });
    });

    describe('When root is Node("root")', () => {
      it('should return "root..#..#"', () => {
        const root = Node('root')
        expect(serialize(root)).to.equal('root..#..#')
      });
    });

    describe('When root is Node("root", Node("123"))', () => {
      it('should return "root..123..#..#..#"', () => {
        const root = Node('root', Node('123'))
        expect(serialize(root)).to.equal('root..123..#..#..#')
      });
    });

    describe('When root is Node("root", Node("123"), Node("321"))', () => {
      it('should return "root..123..#..#..321..#..#"', () => {
        const root = Node('root', Node('123'), Node('321'))
        expect(serialize(root)).to.equal('root..123..#..#..321..#..#')
      });
    });

    describe('When using the problem example', () => {
      it('should work', () => {
        const root = Node(
          'root',
          Node('left', Node('left.left')),
          Node('right')
        )
        expect(serialize(root))
          .to.equal('root..left..left.left..#..#..#..right..#..#')
      });
    });
  });

  describe('deserialize(...)', () => {
    describe('When str is empty', () => {
      it('should return null', () => {
        expect(deserialize('')).to.equal(null)
      });
    });

    describe('When str is "root..#..#"', () => {
      it('should return { val: "root", left: null, right: null }', () => {
        const expected = { val: 'root', left: null, right: null }
        expect(deserialize('root..#..#')).to.deep.equal(expected)
      });
    });

    describe('When str is "123..#..#"', () => {
      it('should return { val: "123", left: null, right: null }', () => {
        const expected = { val: '123', left: null, right: null }
        expect(deserialize('123..#..#')).to.deep.equal(expected)
      });
    });

    describe('When str is "root..left..#..#..#"', () => {
      it('should return { val: "root" }', () => {
        const expected = {
          val: 'root',
          left: { val: 'left', left: null, right: null },
          right: null
        }
        expect(deserialize('root..left..#..#..#'))
          .to.deep.equal(expected)
      });
    });

    describe('When using the problem example', () => {
      it('should work', () => {
        const expected = {
          val: 'root',
          left: {
            val: 'left',
            left: { val: 'left.left', left: null, right: null },
            right: null
          },
          right: { val: 'right', left: null, right: null }
        }

        // expect(deserialize('root..left..left.left..#..#..#..right..#..#'))
        //   .to.deep.equal({})
        expect(deserialize('root..#..right..#..#'))
          .to.deep.equal({})
      });
    });
  });
});
