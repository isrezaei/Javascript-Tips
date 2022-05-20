// spread operator in Objects

let objectThree = {
    first_name : 'Frankly',
    last_Name : 'Ford',
    aeg : '25',
    job : 'programmer'
}

let objectFour = {...objectThree}

objectFour.first_name = 'Lili'

console.log(objectThree.first_name) // Frankly
console.log(objectFour.first_name) // Lili

//Old solution

let objectFive = {
    first_name : 'Frankly',
    last_Name : 'Ford',
    aeg : '25',
    job : 'programmer'
}

const objectSix = Object.assign({} , objectFive)

objectSix.first_name = 'Lili'

console.log(objectFive.first_name) // Frankly
console.log(objectSix.first_name) // Lili

