
exports.seed = async function(knex) {
    await knex("users").insert([
        {
            username: 'Lesley',
            password: 'password1'
        }
      ]);
    
  };

  