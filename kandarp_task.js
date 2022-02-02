/*
        Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct or not.
        return either true or false
 */

function isBalanced(string) {
	const brackets = {
		'(': ')',
		'{': '}',
		'[': ']',
		arr: [],
		get size() {
			return this.arr.length
		},
	}
	for (let value of string) {
		if (brackets[value]) {
			brackets.arr.push(value)
			continue
		} else if (brackets[brackets.arr[brackets.size - 1]] !== value) return false
		brackets.arr.pop()
	}

	return !brackets.size ? true : false
}

console.log(isBalanced('[()]{}{[()()]()}')) // true
console.log(isBalanced('[(])')) // false
console.log(isBalanced('[({}])')) // fasle
console.log(isBalanced('[]{}()')) // true
console.log(isBalanced('[(){()}{}]')) // true
