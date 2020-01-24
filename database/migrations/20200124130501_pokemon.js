
exports.up = async function(knex) {
    await knex.schema.createTable('user', tbl => {
        tbl.increment();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
    })

    await knex.schema.createTable('pokemon', tbl => {
        tbl.increment();
        tbl.string('name').notNullable().unique();
        tbl.sting('abilities');
        tbl.float('height').nutNullable();
        tbl.integer('age').nutNullable();
    

    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('pokemon');
    await knex.schema.dropTableIfExists('user');
};
