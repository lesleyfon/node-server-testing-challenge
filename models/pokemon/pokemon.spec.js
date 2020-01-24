const db = require('./../../database/dbConfig');
const pokemonModels = require('./pokemonModels');

//before we run the test files we run the seeds to reseed the db and revert it to its initial state 
beforeEach(()=>{
    db.seed.run();
})

describe('Test Pokemon models', () => {
    test('Should return a list of pokemon from the db', async () => {
        const pokemons = await pokemonModels.fetchPokemon();
        expect(pokemons).toHaveLength(3);
        expect(pokemons[0].name).toBe('Pikachu');
        expect(Array.isArray(pokemons)).not.toBeFalsy();

    });
    test('Test for pokemons with a specific id', async () => {

        const pokemon = await pokemonModels.fetchPokemonAt(2);
        //Check if it return an object or an array
        expect(Object.prototype.toString.call(pokemon)).toEqual('[object Object]');
        expect(pokemon.name).toBe('Ash Ketchum')
        expect(Object.values(pokemon).length).toBe(5)
    })
    
    
})
