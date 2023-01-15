/*
KEY NOTES
1. We can use four methods to copy an a reference type (array/object).
    1.1 Spread Operator (shallow copy - works on both)
    1.2 Object.assign() method (shallow copy - not applicable to arrays)
    1.3 JSON.parse() method (deep copy - works on both)
    1.4 Using lodash npm library (deep copy - works on both)
*/

const lodash = require('lodash');
const person = {
    name: "Aby",
    job:"Software Engineer",
    married: true,
    education:[
        {
            institute: "Mar Gregories",
            marks: [10,20,30]
        },
        {
            institute: "Chinmaya",
            marks: [50,60,70]
        }
    ]
}

// const personCopy = {...person}
// const personCopy = Object.assign({},person)
// const personCopy = JSON.parse(JSON.stringify(person));
const personCopy = lodash.cloneDeep(person);

personCopy.education[0].institute = "SNGIST"; //changing the inner object property
console.log(person);
console.log(personCopy);