const path = require("path");
const express = require("express");
const app = express();
// const connection = require("./config/db");

app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Exemple de connection a la base de données
// app.get("/database-test", (req, res) => {
//   const id = 10;
//   const user_id = 24;

//   /**
//    * Connection a la base de donnée 
//    * faire une request
//    */
//   connection.query(
//     "SELECT * FROM table_name WHERE id = ? AND user_id = ?",
//     [id, user_id],
//     (err, res) => {
//       if (err) throw err;
//       // res est le resultat de la request sql
//     }
//   );

//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
