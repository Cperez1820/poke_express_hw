const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("/models/pokemon")

// Routes
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) =>{
    res.send(pokemon)
})


// APP LISTENER 
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
});