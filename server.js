//Imports
let express = require("express");

//Instantiate server
let server = express();

//Configure routes
server.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bonjour sur mon serveur</h1>");
});

//Launch server
server.listen(8088, function () {
  console.log("Serveur en écoute ;-) !");
});
