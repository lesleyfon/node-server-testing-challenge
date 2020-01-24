require('dotenv').config()
const express = require('express')
const pokemonModel = require('./models/pokemon/pokemonModels');

const app = express();

app.use(express.json)
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => res.send('Welcome route'));

app.get('/pokemon', async (req, res, next)=>{
    res.status(200).json({
        pokemon: await pokemonModel.fetchPokemon()
    })
})
// app.post('/pokemon', async (req, res, next)=>{
//     const {} = req.body;
// })


if(!module.parent){
    app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))
}

 module.exports = app