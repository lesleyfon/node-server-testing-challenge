const db = require('../../database/dbConfig');

function fetchPokemon(){
    return db('pokemon')
}

function fetchPokemonAt(id){
    return db('pokemon').where('id', id).first();
}

module.exports ={
    fetchPokemon,
    fetchPokemonAt
}