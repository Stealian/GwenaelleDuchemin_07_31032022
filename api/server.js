const http = require("http");
const app = require("./app");
const db = require("./models/index");
require("dotenv").config();
const normalizePort = (val) => {
  // la fonction normalizeport renvoie un port valide, qu'il soit fourni sous la forme d'un number ou d'un string
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.NODE_DOCKER_PORT || "8800");
app.set("port", port);

const errorHandler = (error) => {
  // la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

db.sequelize.sync().then(function () {
  server.on("error", errorHandler);
  server.on("listening", () => {
    const address = server.address();
    const bind =
      typeof address === "string" ? "pipe " + address : "port " + port;
    console.log("Listening on " + bind);
  });
  server.listen(port);
  require("./config/admin"); // la fonction setAdmin est appelée
}); // un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
