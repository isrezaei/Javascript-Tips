// Primitive Data Type  [number , string , boolean , undefind , null]

let numberA = 52;
let codeB = numberA;
codeB = 63;

console.log(numberA); // 52
console.log(codeB); // 63

let stringA = "Frankly";
let stringB = stringA;

stringB = "Lili";

console.log(stringA); // Frankly
console.log(stringB); // Lili


//Copy by Reference , Object and Array

let objectOne = {
       first_name : 'Frankly',
       last_Name : 'Ford',
       aeg : '25',
       job : 'programmer'
}

let objectTwo = objectOne

objectTwo.first_name = 'Lili'

console.log(objectOne.first_name) // 'Lili
console.log(objectTwo.first_name) // 'Lili 

const arrayOne = ['man' , 'woman' , 'child' , 'animal']

const arrayTwo = arrayOne

arrayTwo[3] = 'objects'

console.log(arrayOne[3]) // objects
console.log(arrayTwo[3]) // objects

//========================================================================================

const people = [
       { name : 'kyle'  , age : 26},
       { name : 'sara'  , age : 25},
       { name : 'lili'  , age : 30},
       { name : 'rose'  , age : 50}
]

const result = people.reduce((accumulator , currentValue) => {

       const age = currentValue.age

       if (accumulator[age] == null) accumulator[age] = []
       accumulator[age].push(currentValue)

       return accumulator

} , {})

console.log(result)

const ArrayTen = [

       { name : 'kyle'  , age : 26},
       { name : 'sara'  , age : 25},
       { name : 'lili'  , age : 30 , code : [23 , 35 , 45]},
       { name : 'rose'  , age : 50 , data : {job : 'worker'}}
]

const newArray = ArrayTen.reduce((newArray , currentArray) => {

       newArray.push(currentArray)

       return newArray

} , [])



newArray[0].name = 'mina'
newArray[1].age = 10
newArray[2].code.push(78)
newArray[3].data.job = 'programmer'

console.log(ArrayTen)
console.log(newArray)


//JSON.parse and JSON.stringify (Deep copy)

const ArrayEleven = [[2] , [25]]

const parse = JSON.parse(JSON.stringify(ArrayEleven))

parse[0].push(1000)

console.log(parse) // [ [ 2, 1000 ], [ 25 ] ]
console.log(ArrayEleven) // [ [ 2 ], [ 25 ] ]

// for in , for of

const arrayTwelve = [1 , 2 , 3 , 4 , 5 , 6]

for (let x of arrayTwelve)
{
       console.log(x) // 1 , 2 , 3 , 4 , 5 , 6
}

for (let x in arrayTwelve)
{
       console.log(x) // 0 , 1 , 2 , 3 , 4 , 5 returning key of each value array or object
       console.log(arrayTwelve[x]) // 1 , 2 , 3 , 4 , 5 , 6
}

const iterableArray = [
       {name : 'hossein'},
       {name : 'jalal'},
       {name : 'sare'},
       {name : 'nilo'},
]

for (let y of iterableArray)
{
       console.log(y) // copy of up Array
}


for (let y in iterableArray)
{
       console.log(y) // return hidden key in array : 0 , 1 , 2 ,3
}

const iterableObject = {
       name : 'kyle',
       lastName : 'ford',
       age : 52
}


for (let y in iterableObject)
{
       console.log(y) // return key in object : name , lastName , age
       console.log(iterableObject[y]) // return value of upper object
}
