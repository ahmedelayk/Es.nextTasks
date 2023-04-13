
function getMinMax(...nums){
  return [Math.min(...nums), Math.max(...nums)]
}

let arr = [120,18,65,293,125,265,15]
let [minNumber, maxNumber] = getMinMax(...arr)
console.log(`the min. number: ${minNumber} and the max. number: ${maxNumber}`)