const express = require("express");
const arg = process.argv;
const pokiman = require("./routes/pokedex.json");
const app = express();

app.get("/", (req, res) => {
  return res.json(pokemi);
});

app.get("/api/pokemon/", (req, res) => { 
  return res.json(pokiman);
});

app.get("/pokemon/:id", (req, res) => {
  const pokemi = pokiman.find((c) => c.id == parseInt(req.params.id));
  if (!pokemi)

    return res.status(404).send("This pokemon was not found");

  res.send(pokemi);
});

app.listen(arg[2], function () {
  console.log("Server is listening on http://localhost:" + arg[2]);
});
