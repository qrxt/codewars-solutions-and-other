const isBalanced = string => {
  const bracketTypes = {
    "}" : "{",
    ")" : "(",
    "]" : "[",
    ">" : "<"
  };

  const brackets = string.split("").reduce((acc, item) =>
    (item in bracketTypes || Object.values(bracketTypes).includes(item))?
      [ ...acc, item ]:
      acc, []
  );

  const iter = (counter, acc) => {
    const current = brackets[counter];
    const lastBracket = acc[acc.length - 1];
    if(counter === brackets.length) {
      return acc.length === 0;
    }
    if(Object.values(bracketTypes).includes(current)) {
      return iter(counter + 1, [ ...acc, current ]);
    }
    return (bracketTypes[current] === lastBracket)?
      iter(counter + 1, acc.slice(0, acc.length - 1)):
      false;
  };

  return iter(0, []);
};

console.log(
  isBalanced('}{'),                      // false
  isBalanced('{{}'),                     // false
  isBalanced('{}{}'),                    // true
  isBalanced('foo { bar { baz } boo }'), // true
  isBalanced('foo { bar { baz }'),       // false
  isBalanced('foo { bar } }')           // false
);