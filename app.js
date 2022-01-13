/* challenge 10 */
/*   */

const Number1 = document.getElementById('number1')
const Number2 = document.getElementById('number2')
const Multiply = document.getElementById('multiply')
const Division = document.getElementById('division')
const Result = document.getElementById('result')

let result
Multiply.addEventListener('click', () => {
	result = Number(Number1.value) * Number(Number2.value)
	Result.innerText = result
})
Division.addEventListener('click', () => {
	result = Number(Number1.value) / Number(Number2.value)
	Result.innerText = result
})

/* challenge 12 */
/* Write a JavaScript program to get the website URL (loading page) */
/*  */
function currentUrl() {
	// console.log(window.location.href)
	document.getElementById('url').innerText = window.location.href
}
currentUrl()
/* challenge 13 */
/* Write a JavaScript exercise to create a variable using a user-defined name. */

function createVariable(variable, value) {
	const script = document.createElement('script')
	script.innerHTML = `const ${variable} = ${value}`
	document.body.appendChild(script)
	console.log(` now you can use this new variable "${variable}"`)
}
createVariable('kandarp', 30)
