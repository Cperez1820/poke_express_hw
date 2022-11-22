// require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")
const reactViews = require("express-react-views")
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   mongoose.connection.once("open", ()=>{
//     console.log("connected to mongo");
//   })

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// Routes
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) =>{
    res.render("Index", {pokemon: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    res.render("Show",pokemon [req.params.id]);
})



app.get("/pokemon/:id", (req, res) => {
    eachMon.findById(req.params.id, (error, foundeachMon) => {
        if (!error) {
            res.status (200).render('pokemon/Show', {
                eachmon: foundeachMon 
            })
        } else {
            res.status(400).send (error)
        }
    })
})



// res.render('fruits/show', {
//     fruit: fruits [req.params.indexOfFruit] 
// })
// })

// For reference 
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });

// APP LISTENER 
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
});