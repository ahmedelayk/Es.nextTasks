var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];

console.log(
  fruits.every((fruit) => typeof fruit === 'string')
)
console.log(
  fruits.some((fruit) => fruit.startsWith('a'))
)
let newArr = fruits.filter((fruit) => {
  return fruit.startsWith('b') || fruit.startsWith('s')
})
console.log(newArr)

let likedFruits = fruits.map((fruit) => `I like ${fruit}`)
// console.log(likedFruits)

likedFruits.forEach((el) => console.log(el))