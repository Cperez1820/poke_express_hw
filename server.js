const express = require("express")
const app = express()
const PORT = 3000


// Routes
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})




// APP LISTENER 
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
});