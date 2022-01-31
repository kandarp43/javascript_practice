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

function tb() {
	this.table = 'window table'
	console.dir(new.target)
}
new tb()

this.table = 'window is here'
console.log(this.table)

function awe() {
	console.log(this.table)
}
awe()
const weq = () => {
	console.log(this.table)
}
weq()
