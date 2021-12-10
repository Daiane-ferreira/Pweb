
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fabricantes').del()
    .then(function () {
      // Inserts seed entries
      return knex('fabricantes').insert([
        {nome:"VitralBox"},
        {nome:"Vitral"},
        {nome:"Vidrex"},
    
      ]);
    });
};
