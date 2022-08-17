function createPerson(name) {
  return {
    name,
    greeting() {
      let msg = `My name is ${this.name}`;
      console.log(msg);
    },
  };
}
let anbu = createPerson('Anbu');
let trisha = createPerson('Trisha');
anbu.greeting();
trisha.greeting();
