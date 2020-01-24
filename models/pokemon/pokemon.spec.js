const db = require('./../../database/dbConfig');
const pokemonModels = require('./pokemonModels');

//before we run the test files we run the seeds to reseed the db and revert it to its initial state 
beforeEach(()=>{
    db.seed.run();
})

describe('Test Pokemon models', () => {
    test('Should return a list of pokemon from the db', async () => {
        const pokemons = await pokemonModels.fetchPokemon();
        expect(pokemons).toHaveLength(3)
    })
    
})
