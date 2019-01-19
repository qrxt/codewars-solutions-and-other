class Stack {
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
    return new Queue(...this.content.slice(0, this.content.length - 1));
  }

  pop() {
    return this.content.pop();
  }

  size() {
    return this.content.length;
  }
}