function fibonachiWithSize(size) {
  let arr = []
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i < size; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr
}


function fibonachiWithMax(num) {
  let arr = []
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
    let number = arr[i - 1] + arr[i - 2]
    if (number <= num) {
      arr.push(number)
    } else {
      break
    }
  }
  return arr
}

console.log(fibonachiWithSize(15))
console.log(fibonachiWithMax(144))