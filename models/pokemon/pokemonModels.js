const db = require('../../database/dbConfig');

function fetchPokemon(){
    return db('pokemon')
}



module.exports ={
    fetchPokemon
}