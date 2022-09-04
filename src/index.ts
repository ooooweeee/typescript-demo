function encodeDec(func: any) {
  return class Temp extends func {
    constructor() {
      super();
      this._name = 'zhang';
    }
    printName() {
      console.log(this._name);
    }
  };
}

// @ts-ignore
@encodeDec
class Person {
  _name: string = '';
  get name() {
    return this._name;
  }
}
const person = new Person();
(person as any).printName();
