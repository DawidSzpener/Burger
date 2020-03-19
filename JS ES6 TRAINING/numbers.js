const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]

const filterZeroes = (...args) => {
  return args.filter( arg => arg !== 0)
} 

console.log(newNumbers)
console.log(filterZeroes(0, 1, 2, 0))