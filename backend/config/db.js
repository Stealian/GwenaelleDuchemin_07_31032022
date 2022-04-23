const mysql = require("mysql")

// Create connexion
// possibilité de le mettre dans .env mais c'est un projet openclassrooms donc ce ne sont pas des données sensibles.
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'squalstijuks',
    database : "groupomania"
  });
  
 module.exports.getDB = () => {
     return db
 }