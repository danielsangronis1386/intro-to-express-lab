// Import Express

const express = require('express')

// Create an Express app
const app = express()

//routes
//Creat a route that responds to URLs like /greetings/<username-parameter>
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username
    res.send(`hello there, ${username}!`)
})
/* Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

Examples: Matches routes like /roll/6 or /roll/20.

Validation: If the parameter is not a number, 
respond with “You must specify a number.” For instance, /roll/potato should trigger this response.

Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”
app.get ('')*/

app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number)
    if (isNaN(number)) {
        res.send('you must specify a number.')
    } else {
        const roll = Math.floor(Math.random()* number)
        res.send(`you rolled a ${roll}.`)
    }

})
/* I Want THAT One!
Task: Create a route for URLs like /collectibles/<index-parameter>.

Examples: Matches routes such as /collectibles/2 or /collectibles/0.

*/
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  app.get('/collectibles/:index', (req, res) =>{
    const index = parseInt(req.params.index)
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        res.send('this item is not yet in stock. Check back soon!')
    } else {
        const item = collectibles[index]
        res.send(`so, you want the ${item.name}? For ${item.price}, it can be yours!`)
    }
})
/* Task: Create a route /shoes that filters the list of shoes based on query parameters.

Query Parameters:

min-price: Excludes shoes below this price.
max-price: Excludes shoes above this price.
type: Shows only shoes of the specified type.
No parameters: Responds with the full list of shoes.*/
  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

app.get('/shoes', (req, res) => {
    let filteredShoes = shoes
    const minPrice = parseFloat(req.query['min-price'])
    const maxPrice = parseFloat(req.query['max-price'])
    const type = req.query.type

    if (!isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice)
    }
    if (!isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice)
    }
    if (type){
        filteredShoes =filteredShoes.filter(shoe => shoe.type === type)
    }
    
    res.json(filteredShoes)


})



// tell our server were to start
app.listen(3000, () => {
  console.log('Listening on port 3000')
})