//pure Function
//require you to avoid mutating data

const TestArray = [1 , 2 , 3 , 4 , 5]

const ExampleThree = (array , num) => [...array , num]
ExampleThree(TestArray , 'yam yam yam')

// Test Array is [1 , 2 , 3 , 4 , 5]
// Pure output is [1 , 2 , 3 , 4 , 5 , yam , yam , yam]