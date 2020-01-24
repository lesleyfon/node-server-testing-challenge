exports.seed = async function(knex) {
    await knex("pokemon").insert([
        {
        name : 'Pikachu',
        abilities : 'Fire',
        height : 0.9,
        age : 3,
        },
        {
        name : 'Ash Ketchum',
        abilities : 'Ash has the ability to sense and control Aura, as it was shown in Lucario and the Mystery of Mew and once again in the Diamond and Pearl episodes, Pokémon Ranger and the Kidnapped Riolu',
        height : 5.01,
        age : 10,
        },
        {
        name : 'Misty',
        abilities : 'Misty Surge creates a low-lying mist, like the move Misty Terrain, when the bearer enters battle. It protects all grounded Pokémon from status conditions and halves the power of Dragon type attacks.',
        height : 5.01,
        age : 10,
        },
      ]);
    
  };