export const up = async (knex) => {
    return knex.schema.createTable('users', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
  };
  
  export const down = async (knex) => {
    return knex.schema.dropTable('users');
  };
  