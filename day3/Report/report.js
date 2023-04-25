// Report about Reflect
console.log('='.repeat(20), 'Reflect.deleteProperty()', '='.repeat(20))
// [1] Reflect.deleteProperty()
// returns a boolean indicating whether or not the property was successfully deleted.
var obj1 = {
  name: 'ahmed',
  age: 24,
}
var handler1 = {
  deleteProperty(target, prop) {
    if (prop == 'age') {
      throw 'can not delete this property'
    } else {
      delete target[prop]
    }
  }
}
var proxy1 = new Proxy(obj1, handler1)
// delete proxy1.age //Error 'can not delete this property'
// Reflect.deleteProperty(proxy1, 'age') //Error 'can not delete this property'
console.log('='.repeat(20), 'Reflect.defineProperty()', '='.repeat(20))
////////////////////////////
// [2] Reflect.defineProperty()
// returns a boolean indicating whether or not the property was successfully defined.
var obj2 = {

}
var handler2 = {
  defineProperty: function (target, prop, attr) {
    let defAttr = {
      value: 'default',
      writable: false,
      configurable: false,
      enumerable: false,
    }
    defAttr = Object.assign(defAttr, attr)
    if (prop == 'id') {
      throw 'you can\'t define "id" property'
    } else {
      // target[prop] = defAttr[value]
      Object.defineProperty(target, prop, defAttr)
    }
  }
}
var proxy2 = new Proxy(obj2, handler2)
// proxy2.id = 101 // Error 'you can't define "id" property'
// Reflect.defineProperty(proxy2, 'id', { value: 101 }) // Error 'you can't define "id" property'
Reflect.defineProperty(proxy2, 'name', { value: 'ayook', enumerable: true, })
console.log(Reflect.getOwnPropertyDescriptor(proxy2, 'name'))

console.log('='.repeat(20), 'Reflect.has()', '='.repeat(20))
////////////////////////////
// [3] Reflect.has()
// returns a boolean indicating whether or not the target has the property.
var obj3 = {
  private_day: 25,
  month: 'may',
  year: 1998
}
var handler3 = {
  has: function (target, prop) {
    if (prop.substring(0, 7) == 'private') {
      return false
    } else {
      if (target[prop]) {
        return true
      } else {
        throw `there is no ${prop} property`
      }
    }
  }
}
var proxy3 = new Proxy(obj3, handler3)
console.log(Reflect.has(proxy3, 'month')) //true
console.log(Reflect.has(proxy3, 'private_day')) //false
// console.log(Reflect.has(proxy3, 'name')) // Error `there is no name property`

console.log('='.repeat(20), 'Reflect.ownKeys()', '='.repeat(20))
////////////////////////////
// [4] Reflect.ownKeys()
// returns an Array of the target object's own property keys including symbols.
var obj4 = {
  name: 'ali',
  age: 10,
  [Symbol('private')]: 'ayk',
}
var handler4 = {
  // ownKeys: function (target) {
  //   return Reflect.ownKeys(target)
  // }
}
var proxy4 = new Proxy(obj4, handler4)
console.log(Reflect.ownKeys(proxy4))

console.log('='.repeat(20), 'Reflect.getOwnPropertyDescriptor()', '='.repeat(20))
////////////////////////////
// [5] Reflect.getOwnPropertyDescriptor()
// returns a property descriptor object if the property exists as an own property of target.
var obj5 = {
  name: 'ali',
  age: 10,
}
var handler5 = {
  getOwnPropertyDescriptor: function (target, prop) {
    return Object.getOwnPropertyDescriptor(target, prop)
  }
}
var proxy5 = new Proxy(obj5, handler5)

console.log(Reflect.getOwnPropertyDescriptor(proxy5, 'name'))
