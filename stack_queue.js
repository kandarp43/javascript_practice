function Stack() {
	return {
		value: [],
		push: function () {
			if (
				this.value.length < this.overflow &&
				arguments.length <= this.overflow - this.value.length
			) {
				for (let i = 0; i < arguments.length; i++) {
					this.value.push(arguments[i])
				}
			} else {
				return null
			}
		},
		pop: function () {
			return this.value.length > 0 ? this.value.pop() : null
		},
		top: function () {
			return this.value.length > 0 ? this.value[this.value.length - 1] : null
		},
		bottom: function () {
			return this.value.length > 0 ? this.value[0] : null
		},
		overflow: 10,
	}
}

const s1 = Stack()
console.log(s1.push(12, 13, 14, 15))
s1.push(16, 17, 18, 19, 34)
s1.push(56)
s1.push(13)
s1.push(35)
s1.push(52)
s1.push(54)

s1.pop()
console.log(s1.top())
console.log(s1.bottom())

console.log(s1.value)

function Queue() {
	return {
		value: [],
		enqueue: function () {
			if (
				this.value.length < this.overflow &&
				arguments.length <= this.overflow - this.value.length
			) {
				for (let i = 0; i < arguments.length; i++) {
					this.value.push(arguments[i])
				}
			} else {
				return 'overflow'
			}
		},
		dequeue: function () {
			return this.value.length > 0 ? this.value.shift() : null
		},
		front: function () {
			return this.value.length > 0 ? this.value[0] : null
		},
		rear: function () {
			return this.value.length > 0 ? this.value[this.value.length - 1] : null
		},
		isEmpty: function () {
			return this.value.length === 0
		},
		overflow: 10,
	}
}

const q1 = Queue()
console.log(q1.isEmpty())

q1.enqueue(11, 12, 13, 14, 15, 16, 17)
q1.enqueue(18)
q1.enqueue(19)
q1.enqueue(20)
q1.enqueue(21)
q1.enqueue(22)
q1.dequeue()

console.log(q1.isEmpty())

console.log(q1.front())
console.log(q1.rear())
console.log(q1.value)
