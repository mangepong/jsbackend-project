var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');


router.post('/', function(req, res) {
    var name = req.body.name;

    var data = [name]
    let sql_del = "DELETE FROM bought WHERE user = ?";
        db.run(sql_del, data, function(err) {
            if (err) {
                console.log(err);
                res.status(400).json({
                    data: {
                        msg: "Could not delete history!"
                    }
                });
            } else {
                res.status(201).json({
                    data: {
                        msg: "History deleted!"
                    }
                });
            }
        });


});

module.exports = router;