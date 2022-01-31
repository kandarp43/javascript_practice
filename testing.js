// var p = new Promise(function (resolve, reject) {
// 	resolve('OK')
// })

// var p2 = p.then(function (item) {
// 	return item
// })
// var p3 = p.then(function (item) {
// 	return item
// })

// console.log(typeof p2 === typeof p3)
//
console.log('=============== 27 -01 -2022 ===============')

function* random() {
	let current = 0
	while (true) {
		yield current++
	}
}
const abcd = random()
console.log(abcd.next().value)
console.log(abcd.next().value)
console.clear()

function Tb() {
	this.table = 'kandarp'
	this.greet = function () {
		return this.table
	}
}

const con = new Tb()
console.log(con.greet())

this.table = 'window is here'
console.log(this.table)

function awe() {
	console.log(this.table)
}
awe()
const weq = () => {
	console.log(this.table)
}
// weq()

// const obj1 = { a: 1, b: 2, c: 3 }
// const obj2 = obj1
// obj1.a = 10
// console.log(obj2)

// const obj1 = { a: 1, b: 2, c: 3 }
// const obj2 = {}
// for (let key in obj1) {
// 	obj2[key] = obj1[key]
// }
// for (let [key, value] of Object.entries(obj1)) {
// 	obj2[key] = value
// }
// obj1.a = 10
// console.log(obj2)
