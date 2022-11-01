const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Mysql@password",
  database: "matheal-test",
});

app.post("/postsupplierstuff", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const id = req.body.id;

  db.query(
    "INSERT INTO supplierstuff (name, price, quantity, id) VALUES (?,?,?,?)",
    [name, price, quantity, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/getsupplierstuff", (req, res) => {
  db.query("SELECT * FROM supplierstuff", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});