
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
      
        {
          nome: "Porta jateada",
          descricao: "Porta de vidro Temperador", 
          imagem: "porta103.jpg",
          fabricantes_id: 2, 
        },
        {
          nome: "Box suit",
          descricao: "Box de vidro Temperador", 
          imagem: "box102.jpg",
          fabricantes_id: 1, 
        },
        {
          nome: "Porta de vidro temperado",
          descricao: "Porta de vidro Temperador fume", 
          imagem: "porta104.jpg",
          fabricantes_id: 3, 
        },
        ]);
    });
};
