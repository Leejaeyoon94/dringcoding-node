console.log('loding....')

// console.clear()

//log level

console.log('log') //개발
console.info('info') //정보
console.warn('warn')//경보
console.error('error')//에러,사용자 에러,시스템 에러

//assert
console.assert(2===3 , 'not same!') //특정한 조건일때 로그 출력
console.assert(2 === 2, 'same!')

//print object
const student = {name: 'yoon', age: 28, company:{name:"AC"}}
console.log(student)
console.table(student)
console.dir(student, { showHidden: true, colors: false, depth: 0 })

//time
console.time('for loop')
for (let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop')

//count
function a() {
    console.count('a function')
}
a()
console.countReset('a function')
a()

//trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3')
    console.trace()
}
f1()