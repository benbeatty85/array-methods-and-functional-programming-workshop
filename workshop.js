function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  for (var i = 0; i < theArray.length; i ++) {
    callback(theArray[i]);
}
}

function map(mappingFunction, theArray) {
  var newArray = [];
  theArray.forEach(function(object) {
    var newObject = mappingFunction(object);
    newArray.push(newObject);
  })
  return newArray;

}

function filter(predicate, theArray) {
  var filteredArray = [];
  for (var i = 0; i < theArray.length; i ++) {
    if (theArray[i] % 2 === 1 ) {
      filteredArray.push(theArray[i]);
    }
  }
  return filteredArray;
  
}

function every(predicate, theArray) {

}

function some(predicate, theArray) {

}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
