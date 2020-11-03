import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('enderecos', table =>{
            table.increments('id').primary();
            table.string('logradouro').notNullable();
            table.string('numero').notNullable();
            table.string('bairro').notNullable();
            table.string('cidade').notNullable();
            table.string('uf').notNullable();
            table.string('pais').notNullable();
            table.string('cep').notNullable();
    });
}

export async function down (knex: Knex){
    return knex.schema.dropTable('enderecos');
}