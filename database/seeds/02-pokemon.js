exports.seed = async function(knex) {
    await knex("pokemon").insert([
        {
        name : 'Pikachu',
        abilities : 'Fire',
        height : 0.9,
        age : 3,
        }
      ]);
    
  };