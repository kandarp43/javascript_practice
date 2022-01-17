// function Jump(arr) {
// 	let Length = arr.length - 1
// 	for (let i = Length; i >= 0; i--) {
// 		if (i + arr[i] >= Length) Length = i // 4 3 3 1 0
// 	}
// 	return Length === 0
// }
// console.log(Jump([2, 3, 0, 1, 4]))

/**
 * i = 4    4 + index of 4 is 4  = 4 + 4 = 8 value of length will be 4
 * i = 3    3 + index of 3 is 1  = 3 + 1 = 4 value of length will be 3
 * i = 2    2 + index of 2 is 0  = 2 + 0 = 2 which is lower then length so length value will be same 3
 * i = 1    1 + index of 1 is 3  = 1 + 3 = 4 value of length will be 1
 * i = 0    0 + index of 0 is 2  = 0 + 2 = 2 value of length will be 0
 */

// challenge 1
/* expected output */
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const days = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
]
const date = new Date()
const time = `${date.getHours()} PM  ${date.getMinutes()} :${date.getSeconds()}`
console.log(`Today is: ${days[date.getDay()]}`)
console.log(`Current time is ${time}`)

/* challenge 2 */
/* Just Uncomment below code and remember it does not work on node.js */

// function printWindow() {
// 	window.print()
// }
// printWindow()

/* challenge 3 */
/*  Expected Output : */
/* mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

function getCurrentDate(date, month, year) {
	console.log(date, month, year)
	if (date < 10) {
		console.log(`0${date}-0${month}-${year}`)
		console.log(`0${date}/0${month}/${year}`)
	} else {
		console.log(`${date}-${month}-${year}`)
		console.log(`${date}/${month}/${year}`)
	}
}
getCurrentDate(date.getDate(), date.getMonth() + 1, date.getFullYear())

/* challenge 4 */
/* Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7 */

function findAreaOfTriangle(a, b, c) {
	const s = (a + b + c) / 2
	console.log(s)
	const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
	console.log(area)
}
findAreaOfTriangle(5, 6, 7)

/* challenge 5 */
/* Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front */

function ReverseString(value) {
	const Split = value.split('')
	const Length = Split.length
	console.log(Length)
	let ReverseString = []
	for (let i = 0; i < Length; i++) {
		const RotatedValue = Split.pop()
		ReverseString.push(RotatedValue)
	}
	console.log(ReverseString.join(''))
}
ReverseString('w3resource')

/* challenge 6 */
/*  Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. */
function IsLeapYear(year) {
	fullDate = `02-29-${year}`
	const custom_date = new Date(String(fullDate))
	custom_date.getDate() === 29
		? console.log(`${year} is a leap year`)
		: console.log(`${year} is not a leap year`)
}
IsLeapYear('2016')

/* challenge 7 */
/* Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. */

function findSunday(yearStart, yearEnd) {
	for (i = yearStart; i <= yearEnd; i++) {
		const dateCustom = new Date(String(i))
		if (
			dateCustom.getDay() === 0 &&
			dateCustom.getMonth() === 0 &&
			dateCustom.getDate() === 1
		) {
			console.log(dateCustom.toDateString())
		}
	}
}
findSunday('2014', '2050')

/* challenge 8 */
/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". */

function getGuessNumber(guess) {
	const randomNumber = parseInt(Math.random() * 10 + 1) // can also use Math.floor instead of parseInt
	console.log(randomNumber)
	randomNumber === guess ? console.log('Good Work') : console.log('Not matched')
}
getGuessNumber(6)

/* challenge 9 */
/* Write a JavaScript program to calculate days left until next Christmas */
function countChrismasDays() {
	const currentDate = new Date()
	const condition =
		currentDate.getDate() > 25 && currentDate.getMonth() + 1 === 12
	const year_change = condition
		? currentDate.getFullYear() + 1
		: currentDate.getFullYear()
	console.log(year_change)
	const chrismas = `12-25-${year_change}`
	console.log(currentDate.getDate(), currentDate.getMonth())
	const LeftDate = new Date(chrismas)
	const time_left = LeftDate.getTime() - currentDate.getTime()
	const dayLeft = Math.floor(time_left / (1000 * 3600 * 24))
	console.log(`${dayLeft} days left in next chrismas`)
}
countChrismasDays()

/* challenge 10 */
/* Write a JavaScript program to calculate multiplication and division of two numbers (input from user). */
/* code is on the second file in current folder ` app.js `  */

/* challenge 11 */
/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor */
/* [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] */
/* Expected Output : */
/* 60°C is 140 °F */
/* 45°F is 7.222222222222222°C */

function getCelsius(c) {
	let findFahrenheit = (c * 9) / 5 + 32
	console.log(`${c}°C is ${findFahrenheit} °F`)
}
function getFahrenheit(f) {
	let findCelsius = ((f - 32) * 5) / 9
	console.log(`${f}°F is ${findCelsius} °C`)
}

getCelsius(60)
getFahrenheit(45)

/* challenge 12 */
/* Write a JavaScript program to get the website URL (loading page) */
/* code is on the second file in current folder ` app.js `  */

/* challenge 13 */
/* Write a JavaScript exercise to create a variable using a user-defined name. */
/* code is on the second file in current folder ` app.js `  */

/* challenge 14 */
/* Write a JavaScript exercise to get the extension of a filename. */
// either
function getExtension(filename) {
	let ext = filename.split('.')
	let ext_name = ext[ext.length - 1]
	console.log(ext_name)
	// can also do in this way
	// console.log(ext[ext.length - 1])
}
getExtension('app.js')
//or
function getExtensionTwo(filename) {
	let ext = filename.split('.')
	console.log(ext.pop())
}
getExtensionTwo('app.js')
/* challenge 15 */
/* Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.  */

function getDifference(number) {
	if (number > 13) {
		let diff = number - 13
		return diff * 2
	} else {
		return 13 - number
	}
}
console.log(getDifference(16))

/* challenge 16 */
/* Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. */
function getSum(number1, number2) {
	const sum = number1 + number2
	if (number1 === number2) {
		return sum * 3
	}
	return sum
}
console.log(getSum(7, 7))

/* challenge 17 */
/* Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. */

function getDifferenceTwo(number) {
	if (number > 19) {
		let diff = number - 19
		return diff * 3
	} else {
		return 19 - number
	}
}
console.log(getDifferenceTwo(22))

/* challenge 18 */
/*  Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */
function checkNumber(num1, num2) {
	const condition = num1 == 50 || num2 == 50 || num1 + num2 == 50
	if (condition) {
		return true
	}
	return false
}
console.log(checkNumber(24, 26))

/* challenge 19 */
/* Write a JavaScript program to check whether a given integer is within 20 of 100 or 400 */
function checkInteger(num) {
	num = parseInt(num)
	return 400 - num <= 20 || 100 - num <= 20
}

console.log(checkInteger(382)) // please Enter positive value

/* challenge 20 */
/* Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. */
function isPositiveNegative(num1, num2) {
	const condition = (num1 >= 0 && num2 <= 0) || (num1 <= 0 && num2 >= 0)
	return condition
}
isPositiveNegative(12, -21)

/* challenge 21 */
/* Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. */

function addPy(str) {
	let cmpStr = str.slice(0, 2)
	//btw its lowercase `p` in `py`
	return cmpStr === 'py' ? str : `py${str}`
}
console.log(addPy('python'))

/* challenge 22 */
/* Write a JavaScript program to remove a character at the specified position of a given string and return the new string. */
function removeChar(str, pos) {
	const newStr = str.split('')
	delete newStr[pos]
	console.log(newStr.join(''))
}
removeChar('hello javascript', 3)

/* challenge 23 */
/*  Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1 */

function changePosition(str) {
	str = str.trim() //removes unusual white spaces
	if (str.length > 1) {
		let firstChar = str[0]
		let lastChar = str[str.length - 1]
		// either this
		let newStr = str.split('')
		newStr[0] = lastChar
		newStr[newStr.length - 1] = firstChar
		let finalStr = newStr.join('')
		return finalStr

		// or
		// this
		// return lastChar + str.substring(1, str.length - 1) + firstChar
	}
}
console.log(changePosition('hello there'))

/* challenge 24 */
/* Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. */
function changePositionTwo(str) {
	str = str.trim() //removes unusual white spaces
	if (str.length > 1) {
		let firstChar = str[0]
		// either this
		let finalStr = firstChar + str + firstChar
		return finalStr
		// or
		// return firstChar + str + firstChar
	}
}
console.log(changePositionTwo('hello there'))

/* challenge 25 */
/* Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7 */

function checkMultiplyOf(num) {
	num = Math.abs(num)
	/* we can also do ` num%3 == 0 ` instead of below */
	/* either this */
	if (!Boolean(num % 3)) {
		return 'number is a multiple of 3'
	}
	if (!Boolean(num % 7)) {
		return 'number is a multiple of 7'
	}
	/* or this */

	/* above approach lead us to only one output if we want number is multiple of both 3 and 7 we can use different method as below */
	// let output = ''
	// if (!Boolean(num % 3)) {
	// 	output += 'number is a multiple of 3'
	// }
	// if (!Boolean(num % 7)) {
	// 	output += '\n number is a multiple of 7'
	// }
	// return output
}

console.log(checkMultiplyOf(21))

/* challenge 26 */
/*Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.  */
function changePositionThree(str) {
	str = str.trim() //removes unusual white spaces
	if (str.length > 3) {
		let lastThreeChar = str.substring(str.length - 3, str.length)
		// either this
		let finalStr = lastThreeChar + str + lastThreeChar
		return finalStr
		// or
		// return firstChar + str + firstChar
	}
	return 'string is small'
}
console.log(changePositionThree('hi there'))

/* challenge 27 */
/* Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.  */

function checkJava(str) {
	let cmpStr = str.slice(0, 4)

	//btw its uppercase `J` in `Java`
	return cmpStr === 'Java' ? true : false
}
console.log(checkJava('Java'))
console.log(checkJava('Javascript'))
console.log(checkJava('python'))

/* challenge 28 */
/* Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range */

function checkRange(num1, num2) {
	return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) ? true : false
}
console.log(checkRange(8, 7))
console.log(checkRange(64, 32))

/* challenge 29 */
/* Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range. */
function checkRangeTwo(num1, num2, num3) {
	return (num1 >= 50 && num1 <= 99) ||
		(num2 >= 50 && num2 <= 99) ||
		(num3 >= 50 && num3 <= 99)
		? true
		: false
}
console.log(checkRangeTwo(8, 7, 62))
console.log(checkRangeTwo(64, 32, 16))

/* challenge 30 */
/* Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. */
function checkString(str) {
	return str.substring(4, 10) === 'Script' ? str.substring(0, 4) : str
}
console.log(checkString('javaScript'))
console.log(checkString('typeScript'))
console.log(checkString('python'))

/* challenge 31 */
/* Write a JavaScript program to find the largest of three given integers.  */

function findLargest(num1, num2, num3) {
	if (num1 >= num2 && num1 >= num3) {
		if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
			return num1 + ' is largest'
		}
		return `${
			num1 === num3 && num1 === num2 ? 'all three ' : 'two '
		}numbers are equal and largest value is ${num1}`
	} else if (num2 >= num1 && num2 >= num3) {
		if (num2 !== num1 && num2 !== num3 && num3 !== num1) {
			return num2 + ' is largest'
		}
		return 'two numbers are equal and largest value is ' + num2
	} else {
		if (num3 !== num2 && num3 !== num1 && num1 !== num2) {
			return num3 + ' is largest'
		}
		return 'two numbers are equal and largest value is ' + num3
	}
}
console.log(findLargest(2, 3, 1))
console.log(findLargest(5, 4, 1))

/* challenge 32 */
/* Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. */
function nearestValue(num1, num2) {
	let diff1, diff2
	num1 > 100 ? (diff1 = num1 - 100) : (diff1 = 100 - num1)
	num2 > 100 ? (diff2 = num2 - 100) : (diff2 = 100 - num2)
	if (diff1 > diff2) {
		return `${num2} is nearest value to 100`
	} else if (diff1 < diff2) {
		return `${num1} is nearest value to 100`
	} else {
		return `both are equally near`
	}
}
console.log(nearestValue(90, 105))
/* challenge 33 */
/* Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. */

function checkRangeTwo(num1, num2) {
	if (
		(num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
		(num1 >= 70 && num2 <= 100 && num2 >= 70 && num2 <= 100)
	) {
		return true
	}
	return false
}
console.log(checkRangeTwo(72, 46))
console.log(checkRangeTwo(80, 78))

/* challenge 34 */
/*  Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive. */
function largestValueTwo(num1, num2) {
	if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
		if (num1 > num2) return num1 + ' is largest'
		else if (num1 < num2) return num2 + ' is largest'
		else return 'both equal'
	}
	return false
}
console.log(largestValueTwo(50, 52))

/* challenge 35 */
/* Write a program to check whether a specified character exists within the 2nd to 4th position in a given string. */
function checkCharacter(char, str) {
	if (str.indexOf(char) === 2 || str.indexOf(char) === 4) {
		return true
	}
	return false
}
console.log(checkCharacter('d', 'yudiz'))

/* challenge 36 */
/*  Write a JavaScript program to check whether the last digit of the three given positive integers is same */
function checkLastDigit(num1, num2, num3) {
	num1 = String(num1)
	num2 = String(num2)
	num3 = String(num3)
	if (
		num1[num1.length - 1] === num2[num2.length - 1] &&
		num2[num2.length - 1] === num3[num3.length - 1] &&
		num1[num1.length - 1] === num3[num3.length - 1]
	) {
		return true
	}
	return false
}
console.log(checkLastDigit(23, 33, 43))

/* challenge 37 */
/* Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.  */
function changeCase(str) {
	let start = str.substring(0, 3).toLowerCase()
	if (str.length > 3) {
		return start + str.substring(3, str.length)
	}
	return str.toUpperCase()
}
console.log(changeCase('hEllO'))
// console.clear()

// var j = 0
// for (var inp = 0; inp < 10; inp++) {
// 	setTimeout(() => {
// 		console.log(j)
// 		j++
// 	}, inp * 1000)
// }

function findDuplicate(arr) {
	let minNum = Math.min(...arr)
	const ind = arr
		.map((item, index) => (item === minNum ? index : null))
		.filter((item) => item !== null)
	let message = ''
	for (let i = 2; i <= ind.length; i++) {
		message += `index of ${i} duplicate number('${minNum}') is ${ind[i - 1]} \n`
	}
	return message ? message : 'no duplicate numbers'
}
console.log(findDuplicate([2, 3, 4, 2, 2, 4, 2, 2]))
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 1]))
