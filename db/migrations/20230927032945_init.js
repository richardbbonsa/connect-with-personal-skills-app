/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('Clientes',(table)=>{
    table.increments('idCliente');
    table.string('name').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('address').notNullable();
    table.string('NUI').notNullable().unique();
    table.string('phoneNumber').notNullable().unique();
  }).createTableIfNotExists('Facturas',(table)=>{
    table.increments('idFactura');
    table.date('createDate').notNullable();
    table.decimal('pricePerHour').unsigned().notNullable();
    table.decimal('requiredHours').unsigned().notNullable();
    table.decimal('subTotal').unsigned().notNullable();
    table.decimal('taxes').unsigned();
    table.decimal('total').unsigned().notNullable();
    table.string('state').notNullable();
    table.integer('idCliente').unsigned().notNullable();
    table.foreign('idCliente').references('idCliente').inTable('Clientes');
  }).createTableIfNotExists('Proyectos',(table)=>{
    table.increments('idProyecto');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.date('startDate').notNullable();
    table.date('estimatedFinishDate');
    table.integer('idCliente').unsigned().notNullable();
    table.foreign('idCliente').references('idCliente').inTable('Clientes');
    table.integer('idFactura').unsigned();
    table.foreign('idFactura').references('idFactura').inTable('Facturas');
  }).createTableIfNotExists('Login',(table)=>{
    table.increments('idLogin');
    table.string('email').notNullable().unique();
    table.string('user').notNullable();
    table.string('password').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
