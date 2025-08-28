console.log("Hello");
//Data types in java
//primitive dta types
let name = "Tejesh";
//name = 1000; //type is number

console.log(name);
document.writeln(name+" Type is. :"+typeof name+"br"); //Type is string
name = 12345.6789;
document.writeln(name+" Type is. :"+typeof name+"br"); //Type is number
name = false;
document.writeln(name+" Type is. :"+typeof name+"br"); //type is boolean
name = undefined;
document.writeln(name+" Type is. :"+typeof name+"br"); //type is undefined
name = null;
document.writeln(name+" Type is. :"+typeof name+"br"); //type is object
name = Number;

// Refernce type in js
let colors = ["red","green","blue"];
document.writeln(colors+"Type is :" +typeof colors+"<br>");
document.writeln(colors[0]+"Type is :" +typeof colors[0]+"<br>");
document.writeln(colors[1]+"Type is :" +typeof colors[1]+"<br>");
document.writeln(colors[2]+"Type is :" +typeof colors[2]+"<br>");

let person = {
    'name' : 'tejesh',
    'age' : '19',
    'isMarried' : false
      'address' :  {
        'city' : 'tenali',
        'state' : 'A.P'

    }
};
document.writeln(person.name+" type is :"+typeof person.name+"<br>");
document.writeln(person.age+" type is :"+typeof age.name+"<br>");
document.writeln(person.address.city);
document.writeln(person.address.state);


// functions in java script
function displayDetails(name)
{
    document.writeln(name);
}
displayDetails("tejesh");
var x = 20;
var y = 30;
function add(x,y)
{
    return x+y;
}``



