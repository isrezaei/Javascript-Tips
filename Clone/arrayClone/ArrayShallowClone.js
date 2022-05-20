//Shallow Copy in Array  

// spread operator in Array
let arrayThree = ['pink' , 'blue' , 'green']
let arrayFour = [...arrayThree]

arrayFour[0] = 'lightBlue'

console.log(arrayThree[0]) // pink
console.log(arrayFour[0]) // lightBlue

arrayFour.push('orange') // add in index 3
console.log(arrayFour[3]) // orange
console.log(arrayThree[3]) // undefined


//Shallow Copy in Array  Good Old For() loop

const arrayFive = ['Franky' , 'Lili' , 'Rose' , 'Jonny', ['babe']]
const arraySix = []

for(let i = 0 ; i < arrayFive.length ; i++)
{
       arraySix[i] = arrayFive[i]
}

arraySix[0] = 'jesse'
arraySix.push('ruby')

console.log(arrayFive[0])  //Frankly
console.log(arraySix[0]) //Jesse

console.log(arrayFive[5])  //undefined
console.log(arraySix[5])  //ruby

//But if we have sub-value of arrays and objects in the  (arrayFive) , by changing the copied values, their original values will also change.

arraySix[4].push('Hola')

console.log(arrayFive[4])  // [babe , Hola]
console.log(arraySix[4]) // [babe , Hola]

//Array Maps Shallow Copy

const arraySeven = [1 , 2 , 3 , 4 , [5] , [6]].map(items => items + 10)

console.log(arraySeven) // [10 , 12 , 13 , 14 , '510' , '610']

//Array filter get same length

const arrayEight = [1 , 2 , 3 , 4 , [5] , [6]].filter(() => true)

console.log(arrayEight) // '[ 1, 2, 3, 4, [ 5 ], [ 6 ] ]'

//Array reducer

const arrayNine = [1 , 2 , 3 , 4 , 5 , 6].reduce((accumulator , currentValue , currentIndex,currentArray) => {

       // console.log(`accumulator ${accumulator}`) // 5 , 6 , 8 , 11 , 15 , 20
       // console.log(`currentValue ${currentValue}`) // 1 , 2 , 3 , 4 , 5 , 6
       console.log(`currentIndex ${currentIndex}`)

       return accumulator + currentValue //=> 5 + 21 = 26

} , 5)

console.log(arrayNine)