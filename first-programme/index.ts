function addNumbers(a: number, b: number) {
  console.log(a + b);
}
addNumbers(40, 10);

let userId: string;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = "1234";
firstName = "John";
lastName = "Doe";
fullName = firstName + " " + lastName;
isActivated = true;
console.log(
  `User ID: ${userId}, Full Name: ${fullName}, Is Activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

function display() : void {
  console.log("Hello World");
}
display();

//TypeScript Union Types
let ID : string | number | boolean;
ID = "123456789";
ID = 123456789;
ID = true;

console.log(`union userId: ${ID}`);

function displayUser(id: string | number, name: string) {
  console.log(`User ID: ${id}, User Name: ${name}`);
}

displayUser("1234", "John Doe");

//array type
let test : string[];
test = ["John", "Doe", "Smith"];
test.sort();
console.log(test);

let multiType : (string | number | boolean)[];
multiType = ["John", 123, true];
console.log(multiType);


// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);