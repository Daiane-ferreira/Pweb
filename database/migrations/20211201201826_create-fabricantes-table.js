
exports.up = function(knex) {
    return knex.schema.createTable("fabricantes", function(table) {
        table.increments().primary();
        table.string("nome");
      table.timestamps(true,true);
  
    });
  };
  
  exports.down = function(knex) {
   return knex.schema.dropTable("fabricantes"); 
  };
