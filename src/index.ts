function encodeDec() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      _name = 'wang';
      getName() {
        console.log(this.name);
      }
    };
  };
}

const Person = encodeDec()(
  class {
    _name: string = 'zhang';
    get name() {
      return this._name;
    }
  }
);

const person = new Person();
person.getName();
