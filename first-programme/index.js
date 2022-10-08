function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(40, 10);
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = "1234";
firstName = "John";
lastName = "Doe";
fullName = firstName + " " + lastName;
isActivated = true;
console.log("User ID: ".concat(userId, ", Full Name: ").concat(fullName, ", Is Activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
function display() {
    console.log("Hello World");
}
display();
//TypeScript Union Types
var ID;
ID = "123456789";
ID = 123456789;
ID = true;
console.log("union userId: ".concat(ID));
function displayUser(id, name) {
    console.log("User ID: ".concat(id, ", User Name: ").concat(name));
}
displayUser("1234", "John Doe");
//array type
var test;
test = ["John", "Doe", "Smith"];
test.sort();
console.log(test);
var multiType;
multiType = ["John", 123, true];
console.log(multiType);
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
