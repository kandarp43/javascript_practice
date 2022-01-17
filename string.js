/*
PROBLEM - 1
   An isogram is a word that has no duplicate letters.
   Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

   NOTES : Ignore letter case (should not be case sensitive).
*/
function isIsogram(word) {
	let char_arr = word.toLowerCase().split('')
	let buffer_arr = word.toLowerCase().split('')
	let output = char_arr
		.map(() => buffer_arr.includes(buffer_arr.pop()))
		.filter((item) => item === true).length
	return output > 0 ? false : true
	//after realized that can also do with 'new Set' method
}
console.log(isIsogram('Algorism')) // true
console.log(isIsogram('Password')) // false
console.log(isIsogram('Consecutive')) // false

/*
PROBLEM - 2
    Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

    If a binary string has an odd number of 1's, the parity bit is a 1.
    If a binary string has an even number of 1's, the parity bit is a 0.
    The parity bit is appended to the end of the binary string.

    Create a function 'validateBinary' that validates whether a binary string is valid, using parity bits.

    Explanation:
        validateBinary("10110010") ➞ true

        The last digit is the parity bit.
        0 is the last digit.
        0 means that there should be an even number of 1's.
        There are four 1's.
        Return true.

*/
function validateBinary(bits) {
	parity_bit = Number(bits.split('').pop())
	bits = bits.split('')
	let findOne = Math.max(...bits)
	let findZero = Math.min(...bits)
	bits.pop()
	// can also item == findOne
	const countOne = bits
		.map((item, index) => (Number(item) === findOne ? index : null))
		.filter((item) => item !== null)
	if (findOne !== 1 || findZero !== 0) return 'enter valid binary'
	// can also parity_bit == 0
	return parity_bit === 0
		? countOne.length % 2 === 0
		: countOne.length % 2 !== 0
}
console.log(validateBinary('00101101')) // true
console.log(validateBinary('11000000')) // true
console.log(validateBinary('11000001')) // false

/*
PROBLEM - 3

    You will be given a string of characters containing only the following characters: "(", ")", ":"
    Create a function that returns a number based on the number of sad and happy smiley faces there is.
        * The happy faces :) and (: are worth 1.
        * The sad faces :( and ): are worth -1.
        * Invalid faces are worth 0.
    EXPLANATION :
            happinessNumber(":):(") ➞ -1
                The first 2 characters are :)        +1      Total: 1
                The next 2 are ):                    -1      Total: 0
                The last 2 are :(                    -1      Total: -1
*/

function happinessNumber(smilies) {
	smilies = smilies.split('')
	let total = 0
	smilies.forEach((item, index) => {
		item + smilies[index + 1] === ':)' || item + smilies[index + 1] === '(:'
			? (total += 1)
			: item + smilies[index + 1] === '):' || item + smilies[index + 1] === ':('
			? (total -= 1)
			: total
	})
	return total
}
console.log(happinessNumber(':):(')) // -1
console.log(happinessNumber('(:)')) //  2
console.log(happinessNumber('::::')) //  0
