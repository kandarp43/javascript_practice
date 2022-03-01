function deepClone(object) {
	const propNames = Object.getOwnPropertyNames(object)

	if (typeof object !== 'object' && object === null) return object
	let newObj = {}
	for (const name of propNames) {
		let value = object[name]
		if (typeof value !== 'object') {
			newObj[name] = value
		} else newObj[name] = deepClone(value)
	}
	return newObj
}
let newObj = {
	name: 'Tony',
	phone: '9876543210',
	address: {
		personal: {
			area: '13th Street. 47 W',
			city: 'New York',
		},
		office: {
			area: 'Silicon Valley',
			city: 'San Francisco ',
		},
	},
}
console.log(deepClone(newObj))

// export const module = deepClone
