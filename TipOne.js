

const arr1 = new TestArray(10).fill('foo')

const arr2 = new TestArray(10)
const filledArr = [...arr2].map(() => 'foo')

const arr3 = TestArray.from({length : 10} , ()=> 'foo')

const iterable1 = new Map([['hello' , 1] , ['babe' , 2] , ['lily' , 3]]); // return Key value Object
const arr4 = TestArray.from(iterable1) // return [key , value]
const arr5 = TestArray.from(iterable1.values()) // return [values] => [1 , 2 , 3]
const arr6 = TestArray.from(iterable1.keys()) // return [keys] => ['hello' , 'babe' , 'lily']

const iterable2 = new Set(['foo' , 'bar' , 'baz'])
const arr7 = TestArray.from(iterable2 , value => value + ' example') //creates a new, shallow-copied [ 'foo example', 'bar example', 'baz example' ]


const iterable3 = new Set('Hello Beautiful World')
const arr8 = TestArray.from(iterable3) // ['H', 'e', 'l', 'o', ' ', 'B', 'a', 'u','t', 'i', 'f', 'W', 'r', 'd']

TestArray.from({length : 5} , (v , i) => console.log(i)) // value = undefined index = 0 ... 4

console.log(arr7)




////////////////////

const changeArray = (oldArray , number) =>
{
    oldArray.push(number)

    return oldArray
}

const array = [1,2,3,6 , [23]]

changeArray(array , 123)

const array2 = [...array , 12]


array2[4].push(55)
array2[2] = 'hello'

console.log(array2)
console.log(array)
