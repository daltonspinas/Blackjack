/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('make a right Triangle', () => {
  it('returns an empty string when the rows input is 0', () => {
    expect(rightTriangle(0)).toEqual('');
  });
  it('returns a string representation of a right triangle', () => {
    expect(rightTriangle(5)).toEqual('*****\n****\n***\n**\n*');
    expect(rightTriangle(4)).toEqual('****\n***\n**\n*');
    expect(rightTriangle(3)).toEqual('***\n**\n*');
    expect(rightTriangle(2)).toEqual('**\n*');
  });
});
