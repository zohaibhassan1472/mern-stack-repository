
// // let myName = "hitesh     "
// // let mychannel = "chai     "

// // console.log(myName.trueLength);


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// // heroPower.hitesh()
// // myHeros.hitesh()
// // myHeros.heyHitesh()
// // heroPower.heyHitesh()

// // inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()


function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increament= function(){
    this.score++;
}

createUser.prototype.printme= function(){
    console.log(`Price is :${this.score}`)
}

const chai= new createUser("zohaib", 25)
const tea= new createUser("hassan", 250)

chai.printme();
console.log(chai)