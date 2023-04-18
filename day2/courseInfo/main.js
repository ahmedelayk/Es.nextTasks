function displayCourseInfo(obj) {
  let defObj = {
    courseName: 'ES6',
    courseDuration: '3days',
    courseOwner: 'JavaScript',
  }
  let keys = Object.keys(defObj)
  for (let k in obj) {
    if (!keys.includes(k)) {
      throw new Error("You passed invalid property")
    }
  }
  defObj = Object.assign(defObj, obj)
  return `Course Name: ${defObj.courseName}
Course Duration: ${defObj.courseDuration}
Course Owner: ${defObj.courseOwner}`
}
// define some objects
let reactCourse = {
  courseName: 'React',
  courseDuration: '7 days',
  courseOwner: 'Facebook',
}
let angularCourse = {
  courseName: 'Angualar',
  courseDuration: '8 days',
  courseOwner: 'Google',
}
// test cases
console.log(displayCourseInfo(reactCourse))
console.log('='.repeat(25))
console.log(displayCourseInfo(angularCourse))
console.log('='.repeat(25))
console.log(displayCourseInfo({
  courseDuration: '8 days',
}))
console.log('='.repeat(25))
console.log(displayCourseInfo({
  courseOwner: 'Google',
  name: 'ahmed'
}))