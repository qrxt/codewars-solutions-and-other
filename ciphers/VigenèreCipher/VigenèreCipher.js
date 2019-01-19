function VigenèreCipher(key, alphabet) {
  this.key = key;
  this.alphabet = alphabet;

  this.shiftAlphabet = function(alphabet, shift) {
    const firstPart = alphabet.slice(0, shift);
    const withoutFirstPart = alphabet.slice(shift, alphabet.length);
    return [ ...withoutFirstPart, ...firstPart ];
  }

  this.constructAlphabetTable = function(alphabet) {
    const firstRow = alphabet.split("");
    const iter = (counter, acc) => {
      if(counter === alphabet.length) {
        return acc;
      }
      const nextRow = this.shiftAlphabet(firstRow, counter);
      return iter(counter + 1, [ ...acc, nextRow ]);
    }

    return iter(0, []);
  };

  this.spreadKey = function(key, length) {
    const iter = acc => {
      if(acc.length >= length) {
        return acc.slice(0, length);
      }
      return iter(`${acc}${key}`);
    }
    return iter("");
  };

  this.alphabetTable = this.constructAlphabetTable(alphabet);

  this.findIntersection = function(row, column) {
    return this.alphabetTable[this.alphabet.indexOf(row)][this.alphabet.indexOf(column)]
  };

  this.encode = function(string) {
    const spreadedKey = this.spreadKey(this.key, string.length);
     const encoded = string.split("").reduce((acc, item, index) => {
      return (alphabet.split("").indexOf(item) >= 0)?
        [ ...acc, this.findIntersection(item, spreadedKey[index]) ]:
        [ ...acc, item ];
    }, []).join("");
    return encoded;
  };

  this.decode = function(string) {
    const spreadedKey = this.spreadKey(this.key, string.length);
    const decoded = spreadedKey.split("").reduce((acc, item, index) => {
      return (alphabet.split("").indexOf(string[index]) >= 0)?
        [ ...acc, this.alphabet[this.alphabetTable[this.alphabet.indexOf(spreadedKey[index])].indexOf(string[index])]]:
        [ ...acc, string[index] ]
    }, []).join("")
    return decoded;
  }
};