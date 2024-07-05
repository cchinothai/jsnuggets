//Reduce - objects

//cart example
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1, 

    },
    {
        title: 'Google Pixel',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount: 3,
    },
]

//return an object
let {totalItems,cartTotal} = cart.reduce(
    (total,cartItem)=>{
    const {amount, price} = cartItem;
    //count items
    total.totalItems += amount
    //count sum 
    total.cartTotal += (amount*price)

    //ALWAYS RETURN THE PARAMETER
    return total;
},{
    totalItems: 0, 
    cartTotal: 0
})

cartTotal = parseFloat(cartTotal.toFixed(2));

console.log(totalItems,cartTotal);

//Web example. Return the number of languages
//use async await and fetch api
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
    const response = await fetch(url); 
    const data = await response.json();
    const newData = data.reduce((total,repo)=>{
        const language = repo;
        if(total[language]){ //dynamic object property
            total[language] = total [language]+1
        }
        else{
            total[language] = 1
        }
        return total
    },{})
    console.log(newData)
}

fetchRepos()