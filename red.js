//Reduce - the most powerful array method that can replace filter and find. 
// iterates, callback function
// reduces to a single value that can be anything - number, array, object, etc. 
// 1st parameter ('acc') - total of all calculations (accumulator)
// 2nd parameter ('curr') - current iteration/value

const staff = [
    {name: 'bob', age: 22, position: 'developer', salary: 100},
    {name: 'peter', age: 25, position: 'designer', salary: 300},
    {name: 'susy', age: 30, position: 'the boss', salary: 400},
    {name: 'anna', age: 20, position: 'intern', salary: 10},
];

//What is the total daily? return as a number (use 0 as an initial value)
const dailyTotal = staff.reduce((total,person)=>{

    total += person.salary;
    console.log("incremental total - "+total);
    //ALWAYS RETURN A TOTAL OR ELSE WILL BREAK
    return total
}, 0)

console.log("total is: "+dailyTotal);