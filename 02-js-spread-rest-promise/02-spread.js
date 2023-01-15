//Spread operator does have many use cases. It is used to expand an array

//1. print all elements of an array
const electricians = ["John", "Johnny","Janardhanan"];
console.log(...electricians)

//2. Concatenate multiple arrays
const managers =["Ramesh", "Suresh"];
const allEmployees = [...electricians, ...managers];
console.log(allEmployees);

//3. Create shallow copies (first level) of an array/object
const allEmployeesCopy = [...allEmployees];