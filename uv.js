// Unique Values (ES6)
const menu = [
    {
        name:'pancakes',
        category:'breakfast',

    },
    {
        name:'burger',
        category:'lunch',

    },
    {
        name:'steak',
        category:'dinner',

    },
    {
        name:'bacon',
        category:'breakfast',

    },
    {
        name:'eggs',
        category:'breakfast',

    },
    {
        name:'pasta',
        category:'dinner',

    },

];

// We only want the unique categories: 1 breakfast, 1 lunch, 1 dinner

const categories = menu.map((item)=> item.category);
console.log(categories)

//now how to get unique ones? use a set - it only returns unique values
const uniqueCategories = new Set(menu.map((item)=> item.category));
console.log(categories)

//the current state is an object, how do we turn this into an array? 
const arrayUniqueCategories = ['all', ...new Set(menu.map((item)=> item.category))];

//now iterate over array and return the num of categories. 
const result = document.querySelector('.result');
result.innerHTML = arrayUniqueCategories
    .map((category) => {
    return `<button>${category}</button>`})
    .join('');
