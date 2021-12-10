const knex = require("../database/connection");

const findAll= async function(req, res){
    const fabricantes= await knex("fabricantes");
     res.json(fabricantes);
 };

 const create = async function(req, res){
    const result = await knex("fabricantes").insert(req.body);
    res.json(result);
 };
 const update = async function(req, res){
    const result = await knex("fabricantes")
    .where({id: req.params.id})
    .update(req.body);
    res.json(result);
 };
 const destroy= async function(req, res){
    const result = await knex("fabricantes")
    .where({id: req.params.id})
    .del();
    res.json(result);
 };
  module.exports = {findAll,destroy, update, create };
