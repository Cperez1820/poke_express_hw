 require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon')
const pokemon = require('./models/pokemon')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once("open", ()=>{
    console.log("connected to mongo");
  })

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next) => {
    console.log("I'm running for all routes")
    console.log("1. middleware")
    next();
});

app.use(express.urlencoded({extended:false}));


// Routes
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

// app.get('/pokemon', (req, res) =>{
//     res.render("Index", {pokemon: pokemon})
// })

app.get("/pokemon", (req, res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        if (!error) {
            res.status(200).render("Index", {
                pokemon: allPokemon
            })
        } else {
            res.status(400).send(error)
        }
    })
})

// NEW 
app.get("/pokemon/new", (req, res) => {
    res.render("New")
  })
// app.get('/pokemon/:id', (req, res) => {
//     res.render("Show",pokemon [req.params.id]);
// })

app.post("/pokemon", (req, res) =>{
  Pokemon.create(req.body, (error, createdPokemon) =>
  {
    if (!error) {
      // redirects after creating fruit, to the Index page
      res.status(200).redirect("/pokemon")
      } else {
        res.status(400).send(error)
      }
    })
  })


app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (error, foundeachMon) => {
        if (!error) {
            res.status (200).render('Show', {
                pokemon: foundeachMon 
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