//Impure Function we have sideEffect
//that mutating data

const TestArray = [1 , 2 , 3 , 4 , 5]

const ExampleOne = (num) => TestArray.push(num)
ExampleOne(21) // Test Array is [1 , 2 , 3 , 4 , 5 , 21]

const ExampleTwo = (array , num) => array.push(num)
ExampleTwo(TestArray , 10) // Test Array is [1 , 2 , 3 , 4 , 5 , 10]

//Impure Function with unpredictable output

const ExampleFour = (array , num) => [...array , num , Math.random() , new Date()]
ExampleFour(TestArray , 23)

// Notice : "const dose not make the array immutable ,  we do change element not reassignment"