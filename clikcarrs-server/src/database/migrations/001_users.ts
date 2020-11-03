import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table =>{
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('avatar').notNullable();
            table.string('celular').notNullable();
            table.string('email').notNullable();
            table.string('cpf').notNullable();
            table.string('rg').notNullable();
            table.string('password').notNullable();
            table.string('telefone').notNullable();
            table.boolean('isWhatsapp');
            table.date('dtNascimento').notNullable();

            table.integer('idEndereco')
                .notNullable()
                .references('id')
                .inTable('enderecos')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            table.boolean('isActive');
            table.integer('createdBy').notNullable();
            table.integer('updatedBy').notNullable();
            table.date('dtLastUpdate').notNullable();
    });
}

export async function down (knex: Knex){
    return knex.schema.dropTable('users');
}