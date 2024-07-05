//Filter - returns new array, can manipulate the size of the new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined
const people = [
    {name: 'bob', age: 22, position: 'developer'},
    {name: 'peter', age: 25, position: 'designer'},
    {name: 'susy', age: 30, position: 'the boss'},
    {name: 'anna', age: 20, position: 'intern'},
];

const fruits = ['orange', 'pear', 'lemon'];

//filter
const youngPeople = people.filter((person)=>{
    return person.age < 30;
});
console.log(youngPeople);

//note that arrow functions have implicit return, you can just do a one liner where you implicitly return condition
//you don't check the actual object itself
const developers = people.filter((person)=> person.position === 'developer');

console.log(developers);

//no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs); //returns an empty array. 

//find 
const peter = people.find((person)=>person.name === 'peter');
console.log(peter);

//find always returns one SINGLE instance
const fruit = fruits.find((fruit)=> fruit === 'lemon'); 
console.log(fruit);

//no match

const oldPerson = people.find((person)=> person.age > 35);
console.log(oldPerson); //returns undefined --> filter always returns an empty array, whereas find returns undefined

//multiple matches - first match

const randomPerson = people.find((person)=> person.age < 35);
console.log(randomPerson); // returns bob which is the first found person


//note that when trying to get a specific key it may still return an array so you have to access it 
const anna = people.filter((person)=> person.name === 'anna');
console.log(anna[0].position); 
