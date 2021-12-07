// const iterator = {
//   next: function() {
//     return { done: true, value: 123}
//   }
// }


// const names = ['zhangsan', 'lisi', 'wangwu']

// let index = 0
// const namesIterator = {
//   next: function() {
//     if(index < names.length) {
//       return { done: false, value: names[index++] }
//     } else {
//       return { done: true, value: undefined}
//     }
//   }
// }

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())



// const iterableObj = {
//   names: ['zhangsan', 'lisi', 'wangwu'],
//   [Symbol.iterator]: function() {
//     let index = 0
//     return {
//       next: () => { // 一定要是箭头函数，this指向iterableObj才能访问到names属性
//         if(index < this.names.length) {
//           return { done: false, value: this.names[index++] }
//         } else {
//           return { done: true, value: undefined}
//         }
//       }
//     }
//   }
// }

// const iterator = iterableObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// const obj = {
//   name: 'zhangsan',
//   age: 20
// }

// for(const key in iterableObj) {
//   console.log(key)
// }

// for(const key of iterableObj) {
//   console.log(key)
// }

// const arr = ['zhangsan', 'lisi', 'wangwu']
// const iterator = arr[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

function * foo() {
  console.log("step 1")
  const result1 = yield 'yeild 1'
  console.log("step 2")
  console.log(result1)
  const result2 =  yield 'yeild 2'
  console.log("step 3")
  console.log(result2)
  return 'yeild 3'
}

const generator = foo()

console.log(generator.next('next1'))
console.log(generator.next('next2'))
console.log(generator.next('next3'))
console.log(generator.next())