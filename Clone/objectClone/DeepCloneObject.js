//Solution one

const Person = {
    firstName : 'Frankly',
    lastName : 'Ford',
    info : {
        age : '50',
        job : 'Programmer'
    }
}

const ChangePerson = JSON.parse(JSON.stringify(Person))
ChangePerson.info.age = '65'

// Person.info.age = '50'  but  ChangePerson.info.age = '65' it is fast way to Deep Clone
// its dose not work with  Dates , Functions , Undefined , Infinity , RegExps , Maps , Sets , Blobs , FileLists , ImageDatas and complex data types !!