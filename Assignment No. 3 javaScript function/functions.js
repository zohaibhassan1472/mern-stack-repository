// Greeting Function: Create a function greet(name) that takes a name as an argument 
// and returns a personalized greeting message.

document.getElementById("press_greeting").addEventListener("click", function () {
    let fullname = document.getElementById("question_first").value;
    let s2 = document.getElementById("write_name");
    
if (fullname.trim() === "") {
        s2.innerHTML = "empty";

        return
    }

    s2.innerHTML = `Congrats..!!..${fullname.toUpperCase()}..best of luck in everything you do.`;
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
    let input = document.getElementById("even_odd").value;

    if (input.trim() === "") {
        document.getElementById("even_odd_result").innerHTML = "empty";
        return;
    }
    let even_odd = input;
    let check = even_odd % 2;
    if (check === 0) {
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
    let show_repeater = document.getElementById("repeats");
    show_repeater.innerHTML = "";


    for (let i = 1; i <= user_num; i++) {
        show_repeater.append(`${i}:   ${user_string} `);

    };
}
document.getElementById("repeater").addEventListener("click", repeatString);


// Temperature Converter Function: Create a function convertCelsiusToFahrenheit(celsius) 
// that takes a temperature in Celsius as an argument and returns the equivalent temperature in Fahrenheit.

function convertCelsiusToFahrenheit() {
    let get_celsius = +document.getElementById("celsius").value;
    if (get_celsius === 0) {
        document.getElementById("fahrenheit").innerHTML = "empty";
        return
    }
    let fahrenheit = get_celsius * 9 / 5 + 32;
    document.getElementById("fahrenheit").innerHTML = fahrenheit;
}
document.getElementById("convert").addEventListener("click", convertCelsiusToFahrenheit);


// Age Calculator Function: Create a function calculateAge(birthYear) that takes a birth year 
// as an argument and returns the person's age.

function calculateAge() {
    const d = new Date();
    let year = d.getFullYear();
    return year;
}
document.getElementById("calculate").addEventListener("click", function () {
    let current_age = +document.getElementById("current_age").value;
     if(current_age===0){
        document.getElementById("your_age").innerHTML = "empty";
        return 
    } 
    document.getElementById("your_age").innerHTML = calculateAge() - current_age;
})

// Random Number Generator Function: Create a function generateRandomNumber(min, max) 
// that takes two numbers as arguments and returns a random number between min and max.

function generateRandomNumber() {
    let get_min_num = +document.getElementById("min_num").value;
    let get_max_num = +document.getElementById("max_num").value;
    return Math.floor(Math.random() * (get_max_num - get_min_num) + get_min_num);

}

document.getElementById("generate_random").addEventListener("click", function () {
    document.getElementById("random_num_generated").innerHTML = generateRandomNumber();
})

// String Length Function: Create a function getStringLength(str) 
// that takes a string as an argument and returns its length.

function getStringLength(str) {
    let conv_character = str.split("");
    return conv_character.length;
}
document.getElementById("counter").addEventListener("click", function () {
    let get_user_string = document.getElementById("user_string").value;
    document.getElementById("show_lenght").innerHTML = getStringLength(get_user_string);
})


// Array Sum Function: Create a function calculateArraySum(arr) 
// that takes an array of numbers as an argument and returns their sum.

let get_user_number = document.getElementById("user_numbers");
get_user_number.addEventListener("keydown", function (e) {
    if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === " "
    ) {
        return;
    }
    let get_user = document.getElementById("user_numbers").value;
    console.log(get_user)

    if (!/^[0-9]$/.test(e.key)) {

        e.preventDefault();
    }

});

document.getElementById("sum_user_numers").addEventListener("click", function () {
    let get_user_all_numbers = document.getElementById("user_numbers").value;
    let conv_str_int = get_user_all_numbers.split(" ");
    console.log(conv_str_int)
    let sum = 0;
    for (let i = 0; i < conv_str_int.length; i++) {
        let num = parseInt(conv_str_int[i]);
        if (!isNaN(num)) {
            sum += num;
        }


    }
    document.getElementById("show_sum_number").innerHTML = sum;
})


// Vowel Counter Function: Create a function countVowels(str) that takes a string as an argument 
// and returns the number of vowels in the string.

function countVowels() {
    let get_user_string = document.getElementById("user_strings").value;
    // Create vowels array
    let aeiou_AEIOU = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    // Convert string to array
    let cons_To_Array = get_user_string.split("");
    let count = 0;
    for (let i = 0; i < cons_To_Array.length; i++) {
        for (let j = 0; j < aeiou_AEIOU.length; j++) {
            if (cons_To_Array[i] === aeiou_AEIOU[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
document.getElementById("count_vowels").addEventListener("click", function () {
    document.getElementById("show_count_vowels").innerHTML = countVowels();
})