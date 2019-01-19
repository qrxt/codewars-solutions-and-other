//es6

const isThree = (...args) => args.some(item => item === 3);

//es5

const isThree = function() {
  return Object.keys(arguments).some(item => arguments[item] === 3);
}