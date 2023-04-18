let obj = {
  name: 'ahmed',
  age: 24,
  address: 'cairo',
  skills: ['html', 'css', 'js', 'react js'],
  [Symbol.iterator]: function () {
    let keys = Object.keys(obj)
    let counter = 0
    return {
      next: function () {
        if (counter == keys.length) {
          return { value: undefined, done: true }
        } else {
          return { value: `${keys[counter]}: ${obj[keys[counter++]]}`, done: false }
        }
      }
    }
  }
}
for (let prop of obj) {
  console.log(prop)
}
