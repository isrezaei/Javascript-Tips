const Person = {
    firstName : 'Frankly',
    lastName : 'Ford',
    info : {
        age : '50',
        job : 'Programmer'
    }
}

Object.freeze(Person)

Person.firstName = "Lili"  // is not Work !! becuse object is Freeze
Person.info.age = "32" // it is a shallow Freeze !! and still mutates
