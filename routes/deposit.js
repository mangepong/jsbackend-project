var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');


router.post('/', function(req, res) {
    var deposit = req.body.deposit;
    var name = req.body.name;

    db.get("SELECT deposit FROM users WHERE name=?", [name], (err, row) => {
        if (err) {
            res.status(400).json({
                data: {
                    msg: "Could not find user: " + email
                }
            });
        } else {
            let sql = "UPDATE users SET deposit = ? WHERE name = ?";
            deposit = parseInt(row.deposit) + parseInt(deposit);
            let data = [deposit, name]

            db.run(sql, data, function(err) {
                if (err) {
                    console.log("ERROR");
                    res.status(400).json({
                        data: {
                            msg: "Could not add funds!"
                        }
                    });
                } else {
                    res.status(201).json({
                        data: {
                            msg: "Added funds!"
                        }
                    });
                }
            });
        }
    });



});

module.exports = router;