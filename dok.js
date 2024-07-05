// add object keys dynamically using square bracket notation
// the most confusing topic in react tutorial
 const person = {
    name: 'john', 
 };
console.log(person.name);
person.age = 25;
console.log(person);

//square bracket notation alternative

const items = {
    'featured-items':['item1','item2']
}

console.log(items["featured-items"]);

let appState = 'loading' //the value

const app = {
    [appState]:true //value turned into key name
}
//when we use square bracket notation, we are not setting a keyname equal to a variable, we set it equal to whatever
//..VALUE that we set to that variable
const keyName = 'computer'
app[keyName] = 'apple'
console.log(app)



//ex2: update the state variable dynamically while you run function
const state = {
    loading:true,
    name:'',
    job:''
}

//if object name is state, simply make a state object with whatever key you want to change
function updateState(key,value){
    state[key] = value
}

updateState('name','john')
updateState('job','developer')
updateState('loading',false)

console.log(state)

//we are not limited to the keys that we already have, we can create new ones
updateState('products',[])
console.log(state);






