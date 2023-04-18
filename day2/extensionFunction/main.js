
let obj = {
  [Symbol.replace]: function (str, idx) {
    if (str.length > idx) {
      return `${str.substring(0, idx)}...`
    }
  },
  [Symbol.match]: function (str, tar) {
    let regex = new RegExp('[aeiou]', 'ig')
    return str.match(regex)
  }
}

console.log('this is dummy text i wrote it for test some code'.match(obj))
console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, consectetur odio? Dolore, alias! Veritatis molestiae nihil, pariatur id illum nostrum atque eum repudiandae ipsum quidem soluta, suscipit inventore. Impedit, tempora.'.replace(obj, 25))