/*
PROBLEM - 1
Create a function that takes height as a param and prints tree like shape with given height as illustrated below

 EXAMPLES ::
    
    height = 6

                        A
                       ABC
                      ABCDE
                     ABCDEFG
                    ABCDEFGHI
                   ABCDEFGHIJK

        
    height = 3

                        A
                       ABC
                      ABCDE

    height = 4

                        A
                       ABC
                      ABCDE
                     ABCDEFG
                   
*/
function drawTree(height) {
	let spaceString = ''
	let alpha = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]
	for (let i = 1; i <= height; i++) {
		// console.log(i)
		for (let j = height - i; j > 0; j--) {
			spaceString += ' '
		}
		let charString = ''
		for (let k = 0; k < i * 2 - 1; k++) {
			charString += alpha[k]
		}
		spaceString += charString
		spaceString += '\n'
	}
	console.log(spaceString)
}
drawTree(4)
/*
PROBLEM - 2
Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

EXAMPLES ::
diamondArrays(1) ➞ [[1]]
diamondArrays(2) ➞ [[1], [2, 2], [1]]
diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
*/
function diamondArrays(num) {
	// ... your code here
	let arr = []
	for (let i = 0; i < num; i++) {
		let firstArr = []
		for (let j = 0; j <= i; j++) {
			firstArr.push(i + 1)
		}
		arr.push(firstArr)
	}
	for (let i = num - 1; i > 0; i--) {
		let secArr = []
		for (let j = i; j > 0; j--) {
			secArr.push(i)
		}
		arr.push(secArr)
	}
	console.log(arr)
}
diamondArrays(4)
/*
PROBLEM - 3
find positive Cumulative Sum of Array.
The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

NOTE: if possible try to use map and reduce

EXAMPLES ::
Initial Array: [1, 3, 5, 7]           => Cumulative Sum: [1, 4, 9, 16]       => Positive Cumulative Sum: [1, 4, 9, 16]
Initial Array: [1, -2, 3, 4, -6]      => Cumulative Sum: [1, -1, 2, 6, 0]    => Positive Cumulative Sum: [1, 2, 6]
Initial Array: [1, -1, -1, -1, 1]     => Cumulative Sum: [1, 0, -1, -2, -1]  => Positive Cumulative Sum: [1]
*/

function getPositiveCumulativeSum(arr) {
	const newArr = arr.map((item, index, array) => {
		array[index + 1] = item + array[index + 1]
		return item
	})
	const finalArr = newArr.filter((item) => {
		return item > 0
	})
	return { CumulativeSum: newArr, PositiveCumulativeSum: finalArr }
}
console.log(getPositiveCumulativeSum([1, -1, -1, -1, 1]))
