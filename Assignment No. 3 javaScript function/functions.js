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
