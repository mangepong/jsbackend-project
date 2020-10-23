var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');


router.post('/', function(req, res) {
    var name = req.body.name;
    var objectname = req.body.objectname;
    var price = req.body.price;

    var data = [name, objectname, price]
    let sql = "INSERT INTO objects (user, objectname, price) VALUES (?, ?, ?)";
        db.run(sql, data, function(err) {
            if (err) {
                console.log("ERROR");
                console.log(err);
                res.status(400).json({
                    data: {
                        msg: "Could not list object"
                    }
                });
            } else {
                res.status(201).json({
                    data: {
                        msg: "Listed"
                    }
                });
            }
        });
});

module.exports = router;