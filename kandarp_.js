/*****************************************************  PROBLEM 1 START *************************************************/
/*
    Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.
*/

function getUniqueMarks(obj) {
	let temp = []
	Object.entries(obj).forEach((entry) => {
		temp[entry[0]] = entry[1]
	})
	temp.sort(function (a, b) {
		return a.age - b.age
	})
	let array = [
		...new Map(
			temp.map((item) => {
				return [item.marks, item]
			})
		),
	]
	temp = {}
	array = array
		.map((item) => {
			return item[1]
		})
		.sort(function (a, b) {
			return b.age - a.age
		})
		.forEach((item, index) => {
			temp[index] = item
		})

	return temp
}

// Test-cases (dont modify)

const input_1 = {
	0: { age: 18, name: 'john', marks: '400' },
	1: { age: 17, name: 'julie', marks: '400' },
	2: { age: 16, name: 'Robin', marks: '200' },
	3: { age: 16, name: 'Bella', marks: '300' },
}

const input_2 = {
	0: { age: 18, name: 'john', marks: '400' },
	1: { age: 17, name: 'julie', marks: '400' },
	2: { age: 16, name: 'Robin', marks: '200' },
	3: { age: 16, name: 'Bella', marks: '300' },
	4: { age: 16, name: 'john', marks: '250' },
	5: { age: 15, name: 'julie', marks: '250' },
}

console.log(getUniqueMarks(input_1))
/* output :
    {
        "0": { age: 18, name: "john", marks: "400" },
        "1": { age: 16, name: "Robin", marks: "200" },
        "2": { age: 16, name: "Bella", marks: "300" }
    }
*/

console.log(getUniqueMarks(input_2))
/* output :
    {
        "0": {age: 18, name: 'john', marks: '400'},
        "1": {age: 16, name: 'Robin', marks: '200'},
        "2": {age: 16, name: 'Bella', marks: '300'},
        "3": {age: 16, name: 'john', marks: '250'}
    }
*/

/*****************************************************  PROBLEM 1 END   *************************************************/

/*****************************************************  PROBLEM 2 START *************************************************/
/*  
    Given an array of objects, return an sorted array of objects based on the field as described below.
        1. a: increasing order
        2. b: decreasing order
        3. c: increasing order
*/

function customSort(arr) {
	return arr.sort((a, b) => console.log(a.a - b.a || b.b - a.b || a.c - b.c))
}

// Test-cases (dont modify)
console.log(
	customSort([
		{ a: 20, b: 10, c: 30 },
		{ a: 20, b: 11, c: 50 },
		{ a: 20, b: 11, c: 40 },
		{ a: 10, b: 10, c: 70 },
		{ a: 10, b: 10, c: 50 },
		{ a: 10, b: 10, c: 30 },
		{ a: 40, b: 101, c: 80 },
		{ a: 40, b: 120, c: 90 },
		{ a: 40, b: 130, c: 20 },
		{ a: 5, b: 10, c: 35 },
		{ a: 7, b: 10, c: 37 },
	])
)

/* output :
    [
        { a: 5, b: 10, c: 35 },
        { a: 7, b: 10, c: 37 },
        { a: 10, b: 10, c: 30 },
        { a: 10, b: 10, c: 50 },
        { a: 10, b: 10, c: 70 },
        { a: 20, b: 11, c: 40 },
        { a: 20, b: 11, c: 50 },
        { a: 20, b: 10, c: 30 },
        { a: 40, b: 130, c: 20 },
        { a: 40, b: 120, c: 90 },
        { a: 40, b: 101, c: 80 },
    ]
*/
/*****************************************************  PROBLEM 2 END   *************************************************/

// NOTES : please rename this file to <your_name>.js
// Deadline : wednesday
