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
// console.log('=============== 27 -01 -2022 ===============')

// function* random() {
// 	let current = 0
// 	while (true) {
// 		yield current++
// 	}
// }
// const abcd = random()
// console.log(abcd.next().value)
// console.log(abcd.next().value)
// console.clear()

// function Tb() {
// 	this.table = 'kandarp'
// 	this.greet = function () {
// 		return this.table
// 	}
// }

// const con = new Tb()
// console.log(con.greet())

// this.table = 'window is here'
// console.log(this.table)

// function awe() {
// 	console.log(this.table)
// }
// awe()
// const weq = () => {
// 	console.log(this.table)
// }
// weq()
/* given task to copy object from one to another  */
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

// NOTE: prototype chaining and stuff
// let F = function () {
// 	this.a = 1
// 	this.b = 2
// }
// F.prototype.b = 3
// let o = new F() // {a: 1, b: 2}

// // add properties in F function's prototype
// F.prototype.c = 4
// console.log(o.b)

// NOTE: understanding "THIS"

// NOTE: understanding "class"
// class Comp {
// 	constructor() {
// 		this.fname = 'kandarp'
// 		this.lname = 'dangi'
// 		this.fullName = function () {
// 			return this.fname + ' ' + this.lname
// 		}
// 		this.nickName = () => {
// 			return this.fname[0].toUpperCase() + this.lname[0].toUpperCase()
// 		}
// 	}
// }
// const data = new Comp()
// console.log(data.fullName())
// console.log(data.nickName())

// class Details {
// 	#hel() {
// 		console.log('asdsa')
// 	}
// }
// class Masw extends Details {
// 	pr() {
// 		super.hel()
// 	}
// }
// const opt = new Masw()
// opt.pr()
// let objq = {
// 	msg: 'hi',
// }

// function aqs() {
// 	console.log(this.msg)
// }
// Object.defineProperty(objq, 'msg', { configurable: false })

// const a = 10
// const a = 20

// let a = {
// 	x: 1,
// }
// let b = {
// 	x: 1,
// }
// console.log(a + b)
// console.log(Object.is(a, a))
// NOTE: problem of deep copy
// var A = { b: [{ a: [1, 2, 3], b: [4, 5, 6], c: [7, 8, 9] }] }
// // B = Object.assign({}, A)
// let B = { ...A }
// B.b[0].b = 3
// console.log(A)
// console.log(B)

// function deepClone(object) {
// 	const propNames = Object.getOwnPropertyNames(object)
// 	if (typeof object !== 'object' && object === null) return object
// 	let newObj = {}
// 	for (const name of propNames) {
// 		let value = object[name]
// 		if (typeof value !== 'object') {
// 			newObj[name] = value
// 			continue
// 		}
// 		newObj[name] = deepClone(value)
// 	}
// 	return newObj
// }
// const deepClone = require('./deepCloning')
// const obj1 = {
// 	internal: {
// 		a: {
// 			b: 10,
// 		},
// 	},
// }

// const obj5 = Object.assign(obj1)
// console.log(obj1[b])
// const obj2 = deepClone(obj1)
// obj1.internal.a = 123
// const obj2 = JSON.parse(JSON.stringify(obj1))
// obj1.internal.a.b = 21
// console.log(obj1)
// console.log(obj2)

// const value = object[name]
// if (value && typeof value === 'object') {
// 	// newObj[name] = Object.assign({}, value)
// 	newObj = Object.assign(name, deepClone(value))
// 	// newObj = deepClone(value)
// }

// const nestedObject = {
// 	country: {
// 		city: 'vancouver',
// 	},
// }

// const deepClones = JSON.parse(JSON.stringify(nestedObject))

// nestedObject.country.city = 'kd'
// console.log(deepClones)
// console.log(nestedObject)


