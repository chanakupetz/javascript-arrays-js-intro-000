var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element){
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array;
}


/*
var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
return ['foo' ...array];
}; */


/*
function destructivelyAddElementToBeginningOfArray([], element) {
  array.unshift(element)
  return array;
}

 describe('addElementToBeginningOfArray(array, element)', () => {
  it('adds an element to the beginning of an array', () => {
    expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
  })

  it('does not alter the original array', () => {
    const array = [1]

    addElementToBeginningOfArray(array, 'foo')

    expect(array).to.eql([1])
  })

TODO: Define two more functions, addElementToEndOfArray and destructivelyAddElementToEndOfArray. These functions also take two arguments, an array and an element to add to the end of the array. addElementToEndOfArray should not alter the original array; destructivelyAddElementToEndOfArray should alter the original array. */
