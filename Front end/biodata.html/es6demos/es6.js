console.log("you can see this message in console");

function getValues() {
const name1 = document.getElementById("name1").value;
const age = document.getElementById("age").value;
//console.log(name1);
//console.log(age);
//window.alert(name1);
//window.alert(age);
if (age>=18) {
    document.writeln(`Your name is ${name1} and you are elgible to vote`);
}
else{
    document.writeln(`Your name is ${name1} and you are not elgible to vote`);
}
}
function addNumbers() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    let sum = parseInt(number1) + parseInt(number2);
    window.alert(sum);
    document.getElementById("result").innerHTML = sum;
}
