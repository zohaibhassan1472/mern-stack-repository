// Greeting Function: Create a function greet(name) that takes a name as an argument 
// and returns a personalized greeting message.
function greet(name) {
    console.log("event listener run")
    return name;
};
document.getElementById("press_greeting").addEventListener("click", function () {
    let fullname = document.getElementById("question_first").value;
    let s2 = document.getElementById("write_name");
    s2.innerHTML = greet(fullname);
});
// Calculator Function: Create a function calculateSum(a, b) that takes two numbers as arguments and returns their sum.
document.getElementById("sum").addEventListener("click", function () {
    let number_1 = +document.getElementById("num_1").value;
    let number_2 = +document.getElementById("num_2").value;
    document.getElementById("sum_result").innerHTML = number_1 + number_2;
    console.log("zohaib")
});

// Even or Odd Function: Create a function isEven(num) that takes a number as an argument and 
// returns true if the number is even, and false otherwise.

function isEven() {
    let even_odd = +document.getElementById("even_odd").value;
    let check = even_odd % 2;
    console.log(check)
    if (check == 0) {
        document.getElementById("even_odd_result").innerHTML = "true";
    } else {
        document.getElementById("even_odd_result").innerHTML = "false";
    }
}
document.getElementById("identify").addEventListener("click", isEven);

// String Repeater Function: Create a function repeatString(str, n)
//  that takes a string and a number as arguments, and returns the string repeated n times.

function repeatString() {
    let user_string = document.getElementById("string").value;
    let user_num = +document.getElementById("num").value;
    let show_repeater=document.getElementById("repeats");
    show_repeater.innerHTML = "";
   
    
    for(let i=1; i<=user_num; i++ ){
        show_repeater.append(`${i}:   ${user_string} `);

    };
}
document.getElementById("repeater").addEventListener("click", repeatString);


// Temperature Converter Function: Create a function convertCelsiusToFahrenheit(celsius) 
// that takes a temperature in Celsius as an argument and returns the equivalent temperature in Fahrenheit.