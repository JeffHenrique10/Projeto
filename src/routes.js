const express = require("express");
const Task = require("./models/Task");
const routes = express.Router();

routes.post("/", (req, res) => {
  Task.create({
    nome: "Abilio",
    email: "abiliocoelho@gmail.com",
    password: "123456"
  });
  return res.send("Usuário Criado!");
});

module.exports = routes;