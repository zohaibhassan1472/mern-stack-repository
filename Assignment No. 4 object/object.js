// Part 1: Object Methods

// 1. Create an object student with the following properties: name, age, grade, and subjects.
// 2. Use Object.keys() to get an array of the object's keys and log it to the console.
// 3. Use Object.values() to get an array of the object's values and log it to the console.
// 4. Use Object.entries() to get an array of the object's key-value pairs and log it to the console.
// 5. Use delete to remove the grade property from the object and log the updated object to the console.
// 6. Use Object.assign() to add a new property school to the object and log the updated object to the console.
let student={
    name:"Zohaib Hassan",
    age:"28",
    grade:"A+",
    subjects:"Science"
}
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
delete student.grade;
console.log(Object.entries(student));
let student_1={
    school:"High"
}
Object.assign(student,student_1);
console.log(Object.entries(student));

// Part 2: String Methods

// 1. Create a string quote with the value "Believe you can and you're halfway there.".
// 2. Use toUpperCase() to convert the string to uppercase and log it to the console.
// 3. Use toLowerCase() to convert the string to lowercase and log it to the console.
// 4. Use substring() to extract the substring "you can" and log it to the console.
// 5. Use indexOf() to find the index of the substring "you're" and log it to the console.
// 6. Use replace() to replace the substring "halfway" with "almost there" and log the updated string to the console.

let quote="Believe you can and you're halfway there.";
console.log(quote.toLocaleUpperCase());
console.log(quote.toLocaleLowerCase());
console.log(quote.substring(8,16));
console.log(quote.indexOf("you're"));
console.log(quote.replace("halfway", "almost there"));

// Part 3: Number Methods
// 1. Create a number pi with the value 3.14159.
// 2. Use toFixed() to round the number to 2 decimal places and log it to the console.
// 3. Use toPrecision() to round the number to 4 significant figures and log it to the console.

let pi=3.14159;
console.log(pi.toFixed(2))
console.log(pi.toPrecision(4))

// Part 4: Array Methods
// 1. Create an array students with the following objects:
// [
//   { name: "John", age: 20, grade: 85 },
//   { name: "Alice", age: 22, grade: 90 },
//   { name: "Bob", age: 21, grade: 78 },
//   { name: "Charlie", age: 20, grade: 92 },
//   { name: "David", age: 22, grade: 88 }
// ]
// 2. Use forEach() to iterate over the array and log each student's name and grade to the console.
// 3. Use map() to create a new array with each student's grade increased by 5 and log it to the console.
// 4. Use filter() to create a new array with only the students who have a grade greater than 85 and log it to the console.
// 5. Use find() to find the first student who has a grade greater than 90 and log it to the console.
// 6. Use findIndex() to find the index of the first student who has a grade greater than 90 and log it to the console.
// 7. Use reduce() to calculate the average grade of all students and log it to the console.
// 8. Use some() to check if any student has a grade greater than 95 and log the result to the console.
// 9. Use every() to check if all students have a grade greater than 70 and log the result to the console.
// 10. Use includes() to check if the array includes a student with the name "Alice" and log the result to the console.
// 11. Use indexOf() to find the index of the student with the name "Bob" and log it to the console.

let Student=[
    { name: "John", age: 20, grade: 85 },
  { name: "Alice", age: 22, grade: 100 },
  { name: "Bob", age: 21, grade: 78 },
  { name: "Charlie", age: 20, grade: 92 },
  { name: "David", age: 22, grade: 88 }
];

Student.forEach((arg)=>{
console.log(`Student Name :${arg.name}\nGrade :${arg.grade}`);
})

Student.map((arg)=>{
    console.log(`Students Grade Increaed by 5 :${arg.grade+5}`);

})

Student.filter((arg)=>{
    if(arg.grade>85){
    console.log(`Students Grade greater than 85 : ${arg.name} : ${arg.grade}`);
    }
})

Student.find((arg)=>{
    if(arg.grade>90){
    console.log(`First Student greater than 90 : ${arg.name} : ${arg.grade}`);
    }
})

Student.findIndex((arg, index)=>{
    if(arg.grade>90){
    console.log(`Index of First Student is ${index} who has Grade greater than 80 : ${arg.name} : ${arg.grade}`);
    }
})

let averageGrade=Student.reduce((xyz, arg)=>{
    return xyz+arg.grade
    }, 0)/Student.length;
 console.log(`Average Grade of All students are : ${averageGrade}`);


 let gradeGreater=Student.some((arg)=>arg.grade > 95)
 console.log(`student has a grade greater than 95 : ${gradeGreater}`);

 
 let allGradeGreater=Student.every((arg)=>arg.grade > 70)
 console.log(`All student has a grade greater than 70 : ${allGradeGreater}`);
 

let nameinclude=Student.map(arg=>arg.name); // includes() does not work directly on array of object because it does't take callback function thats why i am using firt map to make array of values of property name
 console.log(`Alice has in this list.? : ${nameinclude.includes("Alice")}`);
 
 let checkIndex=Student.map(arg=>arg.name);  // indexOf() does not work directly on array of object because it doest take callback function thats why i am using firt map to make array of values of property name
 console.log(checkIndex.indexOf("Bob"));