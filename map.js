//MAP - the most used array method
/*
returns a new array
doesn't change the size of the original array
uses values from original array when making a new one
*/

const people = [
    {
        name:'bob',
        age: 20,
        position:'developer'
    },
    {
        name:'susie',
        age: 25,
        position:'designer'
    },
    {
        name:'john',
        age: 30,
        position:'the boss'
    }
];
//treat person as a normal function parameter
//we can return whatever we want and will still match the length of the property
const ages = people.map((person)=>{
    return person.age;
})
console.log(ages);

//short form version
const ages1 = people.map((person) => person.age)
console.log(ages1);

//referncing the function
const getAges = (person) => person.age
const ages2 = people.map(getAges)
console.log(ages2);


/*
Constructing objects
*/
const newPeople = people.map((item)=>{
    return {
        firstName:item.name.toUpperCase,
        oldAge:item.age + 20
    }
})
console.log(newPeople)

/*
Wrap data in HTML: grab data, wrap in html or in jsx (react) to nicely display data
*/
//iterate people and grab a name
//refer to index.html
//we'll access person but we want to return the heading 1
//wrap in template string
const names = people.map((person)=>`<h2>${person.name}</h2>`)
const result = document.querySelector('#result');

//let's collect it in one giant string with a join method with empty string (separator will be empty string)
result.innerHTML = names.join('');
