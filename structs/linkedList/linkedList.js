const cons = (x, y) => z => z(x, y);

const car = pair => pair((x, y) => x);
const cdr = pair => pair((x, y) => y);

const l = (...args) =>
  args.slice().reverse().reduce((acc, item) =>
    cons(item, acc), null
  );

class LinkedList {
  constructor(...args) {
    this.args = args;
    this.content = args.slice().reverse().reduce((acc, item) =>
      cons(item, acc), null
    );
  }

  toString() {
    const iter = (currentList, acc) => {
      if(cdr(currentList) === null) {
        return `${acc}, ${car(currentList)}`.slice(2);
      }
      return iter(cdr(currentList), `${acc}, ${car(currentList)}`);
    }
    return iter(this.content, "");
  }

  add(arg) {
    return (new LinkedList(arg, ...this.args));
  }

  has(value) {
    const iter = currentList => {
      if(cdr(currentList) === null) {
        return car(currentList) === value;
      }
      return (car(currentList) === value)? true : iter(cdr(currentList));
    }
    return iter(this.content);
  }
};