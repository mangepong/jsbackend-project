var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');


router.post('/', function(req, res) {
    var name = req.body.name;
    var buyer = req.body.buyer;
    var objectname = req.body.objectname;
    var price = req.body.price;
    var deposit = req.body.deposit;

    var data = [buyer, objectname, price, name]
    let sql = "INSERT INTO bought (user, objectname, price, seller) VALUES (?, ?, ?)";
        db.run(sql, data, function(err) {
            if (err) {
                console.log("ERROR");
                console.log(err);
            } else {
                console.log("De gick bra");
                var data = [name, objectname, price]
                let sql_del = "DELETE FROM objects WHERE user = ? AND objectname = ? AND price = ?";
                    db.run(sql_del, data, function(err) {
                        if (err) {
                            console.log("ERROR");
                            console.log(err);

                        } else {
                            console.log("All went good!")
                        }
                    });

                    let sql3 = "UPDATE users SET deposit = ? WHERE name = ?";
                    deposit1 = parseInt(deposit) - parseInt(price);
                    let data2 = [deposit1, buyer]

                    db.run(sql3, data2, function(err) {
                        if (err) {
                            console.log(err);
                            res.status(400).json({
                                data: {
                                    msg: "Could not add funds!"
                                }
                            });
                        } else {
                            db.get("SELECT deposit FROM users WHERE name=?", [name], (err, row2) => {
                                if (err) {
                                    res.status(400).json({
                                        data: {
                                            msg: "Could not find user: " + email
                                        }
                                    });
                                } else {
                                    let sql4 = "UPDATE users SET deposit = ? WHERE name = ?";
                                    deposit3 = parseInt(row2.deposit) + parseInt(price);
                                    let data4 = [deposit3, name]

                                    db.run(sql4, data4, function(err) {
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
                        }
                    });
            }
        });


});

module.exports = router;