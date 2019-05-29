/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/ Global binding: If the this keyoword is not binded it will display the windows or consoles objects
* 2. implicit binding: the this keyword is used in an object to call back to whatever comes after the this.
* 3. New Binding: used by putting this.keyword in the object and setting the value as a parameter sent through using the new function which basically 
     allows you to make one object that you can use to make NEW objects and allows the code to be dry.
* 4. Explicit Binding: If the call or apply method is used that makes the this explicit
*
* write out a code example of each explanation above
*/

// Principle 1

//console.log(this);
// code example for Window Binding
function callThis() {
    console.log(this);
    //A function does not bind the this keyword
}


// Principle 2
// code example for Implicit Binding
const obj = {
    greet: 'Howdy',
    sayHello: function(name) {
        console.log(`${this.greet} i am ${name}`)
    } 
}
obj.sayHello('Jack')

// Principle 3
// code example for New Binding
function user(userInfo) {
    this.name = userInfo.name;
    this.age = userInfo.age;
    this.hobby = userInfo.hobby;
    return `${this.name} is ${this.age} and loves ${this.hobby}`
}

const jake = new user({name: 'Jake', age: 18, hobby: 'basketball'})
console.log(user(jake));
// Principle 4
const student = {
    fullName : function() {
        return this.firstName + ' ' + this.lastName + ' AKA ' + this.nickName;
    }
}
const student1 = {
    firstName : 'Kevin',
    lastName : 'James',
    nickName : 'Mall Cop'
}
console.log(student.fullName.call(student1));
// code example for Explicit Binding