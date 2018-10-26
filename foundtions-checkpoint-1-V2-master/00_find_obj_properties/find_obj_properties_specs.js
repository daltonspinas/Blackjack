/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Looping to find Object properties using .hasOwnProperty', () => {
  function Rectangle(color, height, width) {
    this.color = color;
    this.height = height;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.height * this.width;
  };

  it("should print out the object's only key", () => {
    const greenRectangle = { color: 'green' };

    expect(findObjPropsHasOwn(greenRectangle)).toBe('color');
  });

  it("should print out the object's keys, comma delimited", () => {
    const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

    expect(findObjPropsHasOwn(yelloRectangle)).toBe('color, height, width');
  });

  it('should print keys belonging to the object instance, not on the prototype', () => {
    const blueRectangle = new Rectangle('blue', 5, 3);

    expect(findObjPropsHasOwn(blueRectangle)).toBe('color, height, width');
  });

  it('should use the `.hasOwnProperty` method', () => {
    const purpleRectangle = new Rectangle('purple', 7, 2);
    spyOn(purpleRectangle, 'hasOwnProperty').and.callThrough(); // checks to see if hasOwnProperty is called

    findObjPropsHasOwn(purpleRectangle);

    expect(purpleRectangle.hasOwnProperty).toHaveBeenCalled();
    // Note: do no use .call on Object.hasOwnProperty.call(purpleRectangle);
  });
});

describe('Looping to find Object properties using `Object.keys` ', () => {
  function Rectangle(color, height, width) {
    this.color = color;
    this.height = height;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.height * this.width;
  };

  it("should print out the object's only key", () => {
    const greenRectangle = { color: 'green' };

    expect(findObjKeys(greenRectangle)).toBe('color');
  });

  it("should print out the object's keys, comma delimited", () => {
    const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

    expect(findObjKeys(yelloRectangle)).toBe('color, height, width');
  });

  it('should print keys belonging to the object instance, not on the prototype', () => {
    /*
    What is Rectangle? Rectangle is the Constructor Function created in 00_rectangle.
    You DON'T need to copy and past the Rectangle function into the solutions_findObjProperties.js file if you
    run testem from foundations-checkpoint-part-1 aka the parent directory.  If you run testem from 01_findObjProperties and receive
    an error that "Rectangle" is not defined, copy and paste the code from 00 into solution_findObjProperties.js
    */
    const blueRectangle = new Rectangle('blue', 5, 3);

    expect(findObjKeys(blueRectangle)).toBe('color, height, width');
  });

  it('should use `Object.keys` method', () => {
    const purpleRectangle = new Rectangle('purple', 7, 2);
    spyOn(Object, 'keys').and.callThrough(); // checks if Object.keys is called

    findObjKeys(purpleRectangle);

    expect(Object.keys).toHaveBeenCalled();
    // Note: do no use Object.hasOwnProperty.call(purpleRectangle);
  });
});
