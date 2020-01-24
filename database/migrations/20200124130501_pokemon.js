
exports.up = async function(knex) {
    await knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
    })

    await knex.schema.createTable('pokemon', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
        tbl.string('abilities');
        tbl.float('height').notNullable();
        tbl.integer('age').notNullable();
    

    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('pokemon');
    await knex.schema.dropTableIfExists('users');
};
