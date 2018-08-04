const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Dave', 'Smith', 47)
console.log(me)

const Person2 = new Person('Clancey', 'Turner', 57)
console.log(Person2)
