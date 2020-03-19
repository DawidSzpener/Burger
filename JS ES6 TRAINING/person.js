class Person {
  constructor() {
    this.age = 27
    this.name = "Dawid Szpener"
  }

  printPersonsDetails = () => {
    return this.name + " is " + this.age + " year's old"
  }
}

dawid = new Person
console.log(dawid.printPersonsDetails())