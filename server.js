const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var dbConn  = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/1/cliente",
    (req, res) => {
        dbConn.query('SELECT * FROM classicmodels.Cliente_mayor_cantidad_compras', function(err,rows) {
            if(err) {
               res.send(err)
            } else {
                res.send(rows)
            }
        })
    });
app.get("/1/producto",
    (req, res) => {
        dbConn.query('SELECT * FROM classicmodels.Productos_Mas_Vendido', function(err,rows) {
            if(err) {
                res.send(err)
            } else {
                res.send(rows)
            }
        })
    });
   app.post('/users', (req, res) => {
      users.push('User ' + users.length)
      res.send("New user add")
    });

app.use((req, res) => {
    res.status(404).send({
        success: false,
        data: {
            message: "Estás intentando hacer algo que no deberías"
        },
    })
});

app.listen(83, () => {
    console.log("Servidor ejecutándose...");
});
