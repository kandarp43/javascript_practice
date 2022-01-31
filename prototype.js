function assign(target, ...source) {
	/*
         gn|    def    : It copies all enumerable own properties from one or more source objects to a target object. 
         gn|    returns: It returns the modified target object 
    */
	const s1 = { a: 1, b: 20 }
	const s2 = { b: 2, c: 3 }

	const t = {}

	const ref_t = Object.assign(t, s1, s2)

	console.log(t)
	console.log(ref_t)
	s1.a = 20
	console.log(ref_t)

	// - can we create new object with Object.create() ?

	// use-case :> shallow copy, merging
}
assign()

function intro2Proto() {
	//  gn|     def: Prototypes are the mechanism by which JavaScript objects inherit features from one another
	/* 
    *       ----------------------------------------------------- getting/setting PROTOTYPES ----------------------------------------------------------
    rd|     METHOD : 1 (deprecated)
                __proto__ 
    gn|     METHOD : 2 (recommended)
                Object.getPrototypeOf(<obj>)
                Object.setPrototypeOf(<obj>, <proto obj>)
    */

	const anuj = {
		name: 'anuj',
		city: 'Jamtara',
		greet() {
			console.log(`Hi. I am ${this.name}`)
		},
	}

	anuj.__proto__.role1 = () => 'nodeJs dev' // ! deprecated
	// Object.setPrototypeOf(anuj, { role2: () => 'denoJs dev' });

	console.log(Object.getPrototypeOf(anuj))

	// ? add a new property in prototype of anuj {}.

	// console.log(anuj.role1());
	// console.log(anuj.role2());
}
// intro2Proto()

function create(proto) {
	/*
         gn|    def    : It creates a new object, and link the passed object with its prototype.
         gn|    returns: It returns the newly created object 
    */
	const p = { a: 1, b: 2 }

	const o = Object.create(p) // - Object.setPrototypeOf({}, { a: 1, b: 2 });

	// console.log(o);
	console.log(Object.getPrototypeOf(o).a)
	console.log(o.__proto__.a)
}
create()

function withoutConstructorFunction() {
	const anuj = {
		name: 'anuj',
		city: 'jamtara',
		age: 60,
		speak: function () {
			return `hi, I am ${this.name}`
		},
	}

	const bipin = {
		name: 'bipin',
		city: 'mumbai',
		age: 10,
		speak: function () {
			return `hi, I am ${this.name}`
		},
	}

	console.log(anuj.speak())
	console.log(bipin.speak())
}
// withoutConstructorFunction();

function withConstructorFunction() {
	function Person(name, age, city) {
		this.name = name
		this.age = age
		this.city = city
		this.speak = function () {
			return `hi, I am ${this.name}`
		}
	}

	const anuj = new Person('anuj', 60, 'Jamtara')
	const bipin = new Person('bipin', 10, 'Mumbai')

	console.log(anuj.speak())
	console.log(bipin.speak())
}
// withConstructorFunction();

function _new() {
	/*   
    *     ---------------------------------------------- Steps Involved while Invoking Function with 'new' ----------------------------------------------
     
    gn|   There are essentially four steps involved while invoking a function with new
             1. An empty brand new object is created

             2. It links the prototype of the constructor function(Person) to the newly created object, 
                thus ensuring that this object can inherit all properties and methods of the constructor function 

             3. The constructor function is called on this newly created object just like method invocation,
                thus, inside the constructor function, this gets the value of the newly created object used in the call. 

             4. Finally, return the newly created object iff any object is not explicitly returned; 
    */
	function Person(name, age, city) {
		this.name = name
		this.age = age
		this.city = city
	}
	Person.prototype.speak = function () {
		return `hi, I am ${this.name}`
	}

	var anuj = new Person('anuj', 60, 'Jmt')

	//
	var o = {} // create empty obj
	o.__proto__ = Person.prototype // linking
	o.constructor('anuj', 60, 'Jmt') // invoking constructor function(Person) // this -> o{}
	//

	console.log(anuj, anuj.speak())
	console.log(o, o.speak())
}
// _new();

// -
function withConstructorFunction_theEfficientWay() {
	function Person(name, age, city) {
		this.name = name
		this.age = age
		this.city = city
	}
	Person.prototype.speak = function () {
		return `hi, I am ${this.name}`
	}

	const anuj = new Person('anuj', 60, 'Jamtara')
	const bipin = new Person('bipin', 10, 'Mumbai')

	console.log(anuj.speak())
	console.log(bipin.speak())
}
// withConstructorFunction_theEfficientWay();
