/**Parent class */
class Polygon {
  constructor(width, height) {
    this.width = width
    this.height = height
    if (this.constructor === Polygon) {
      throw new Error('Abstract class')
    }
  }
  perimeter() {
    return 'Not Implemented'
  }
  area() {
    return 'Not Implemented'
  }
  toString() {
    return `width = ${this.width}, height = ${this.height} , area = ${this.area()} , perimeter = ${this.perimeter()}`
  }
}
/*Rectangle Class */
class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height)
  }
  perimeter() {
    return (this.width + this.height) * 2
  }
  area() {
    return this.width * this.height
  }
}
/*Square Class */
class Square extends Polygon {
  constructor(side) {
    super()
    this.side = side
  }
  perimeter() {
    return this.side * 4
  }
  area() {
    return Math.pow(this.side, 2)
  }
  toString() {
    return `side = ${this.side} , area = ${this.area()} , perimeter = ${this.perimeter()}`
  }
}
/*Circle Class */
class Circle extends Polygon {
  constructor(radius) {
    super()
    this.radius = radius
  }
  perimeter() {
    return 2 * Math.PI * this.radius
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  toString() {
    return `radius = ${this.radius} , area = ${this.area()} , perimeter = ${this.perimeter()}`
  }
}
/*Triangle Class */
class Triangle extends Polygon {
  constructor(x, y, z) {
    super()
    this.x = x
    this.y = y
    this.z = z
  }
  perimeter() {
    return this.x + this.y + this.z
  }
  area() {
    let s = (this.perimeter()) / 2
    return Math.sqrt(s * (s - this.x) * (s - this.y) * (s - this.z))
  }
  toString() {
    return `sides = ${this.x}, ${this.y}, ${this.z} , area = ${this.area()} , perimeter = ${this.perimeter()}`
  }
}

// Test cases
// var p = new Polygon(10,20) //Error (Abstract class)

var rect = new Rectangle(10, 20)
console.log(rect.perimeter())
console.log(rect.area())
console.log(rect.toString())

///////////////////
var sq = new Square(23)
console.log(sq.perimeter())
console.log(sq.area())
console.log(sq.toString())

///////////////////
var c = new Circle(10)
console.log(c.perimeter())
console.log(c.area())
console.log(c.toString())

///////////////////
var tri = new Triangle(3, 5, 7)
console.log(tri.perimeter())
console.log(tri.area())
console.log(tri.toString())
