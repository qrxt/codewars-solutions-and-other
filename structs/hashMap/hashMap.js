class HashMap {
  constructor() {
    this.content = [];
  }

  hash(string) {
    return string
      .split('')
      .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
  }

  set(key, value) {
    this.content[this.hash(key)] = value;
  }

  get(key) {
    return this.content[this.hash(key)];
  }

}

const hm = new HashMap;
hm.set('test', 'testvalue');
hm.get('test');