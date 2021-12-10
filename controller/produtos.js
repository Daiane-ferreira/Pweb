const knex = require("../database/connection");

const findAll= async function(req, res){
    const produtos= await knex("produtos");
    const result= produtos.map((produto) =>{
       produto.imagem= process.env.HOST + "/" + produto.imagem;
      return produto;
    });
     res.json(result);  
 };
 const findOne= async function(req, res){
   const produtos= await knex("produtos").where({id: req.params.id});
    res.json(produtos);
 };

 const create = async function(req, res){
    const produto= {...req.body};
    produto.imagem= req.file.path;
   const result = await knex("produtos").insert(produto);
    res.json(result);
 };
 const update = async function(req, res){
    const result = await knex("produtos")
    .where({id: req.params.id})
    .update(req.body);
    res.json(result);
 };
 const destroy= async function(req, res){
    const result = await knex("produtos")
    .where({id: req.params.id})
    .del();
    res.json(result);
 };
  module.exports = {findAll,destroy, update, create,findOne };
