var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
return [element,...array];
};

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array,element){
  return [...array,element];
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array;
  }

function accessElementInArray(){
  
}
TODO: Define a function in arrays.js called accessElementInArray. 
The function should accept an array and an index and return the element at that index.