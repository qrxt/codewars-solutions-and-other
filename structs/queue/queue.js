class Queue {
  constructor(...content) {
    this.content = content || [];
  }

  push(...items) {
    this.content.push(...items);
  }

  top() {
    return this.content[0];
  }

  remove() {
    return new Queue(...this.content.slice(0));
  }

  shift() {
    return this.content.shift();
  }

  size() {
    return this.content.length;
  }
}