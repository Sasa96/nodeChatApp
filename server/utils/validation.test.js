const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should not accept values that are not string', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should not accept strings with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow strings that have non space characters', () => {
    var res = isRealString('ANYSTRING');
    expect(res).toBe(true);
  });
});
