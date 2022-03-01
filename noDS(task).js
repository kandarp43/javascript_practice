/*
        Given an expression expring exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct or not.
        return either true or false
 */

// function isBalanced(string) {
// 	let value = ''
// 	for (let i of string) {
// 		if (i == '[' || i == '{' || i == '(') {
// 			value += i
// 		}

// 		if (value.length == 0) return false

// 		let target
// 		switch (i) {
// 			case ')':
// 				target = value.slice(value.length - 1)
// 				value = value.slice(0, value.length - 1)
// 				if (target == '[' || target == '{') return false
// 				break

// 			case '}':
// 				target = value.slice(value.length - 1)
// 				value = value.slice(0, value.length - 1)
// 				if (target == '(' || target == '[') return false
// 				break

// 			case ']':
// 				target = value.slice(value.length - 1)
// 				value = value.slice(0, value.length - 1)
// 				if (target == '(' || target == '{') return false
// 				break
// 		}
// 	}
// 	return !value.length ? true : false
// }

// console.log(isBalanced('[()]{}{[()()]()}')) // true
// console.log(isBalanced('[(])')) // false
// console.log(isBalanced('[({}])')) // fasle
// console.log(isBalanced('[]{}()')) // true
// console.log(isBalanced('[(){()}{}]')) // true
// console.log(isBalanced('[{{]}}[]'))
// console.log(isBalanced('[[[]{}(](])'))
// console.log(isBalanced('[[}}{{]}}]'))
// console.log(isBalanced('[{{}}][]'))
// console.log(isBalanced('{{(())}}[[]]]'))
// console.log(isBalanced('{{({[{}]})}}[[]]'))

/*
        Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct or not.
        return either true or false
 */

function isBalanced(string) {
	const brackets = {
		'(': ')', 
		'{': '}', 
		'[': ']', 
	}
	let temp = ''
	for (let value of string) {
		if (brackets[value]) temp += value
		else if (brackets[temp[temp.length - 1]] !== value) return false
		else temp = temp.slice(0, temp.length - 1)
	}

	return temp.length == 0
}

// console.log(isBalanced('[()]{}{[()()]()}')) // true
// console.log(isBalanced('[(])')) // false
console.log(isBalanced('[({}])')) // fasle
// console.log(isBalanced('[]{}()')) // true
// console.log(isBalanced('[(){()}{}]')) // true

// for (let value of string) {
// 	if (brackets[value]) {
// 		brackets.arr.push(value)
// 		continue
// 	} else if (brackets[brackets.arr[brackets.size - 1]] !== value) return false
// 	brackets.arr.pop()
// }
