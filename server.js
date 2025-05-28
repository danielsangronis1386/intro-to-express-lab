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



// tell our server were to start
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
