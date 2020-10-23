var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');


router.post('/', function(req, res) {
    const name = req.body.name;
    let sql = "SELECT * FROM objects";

    db.all(sql, (err, row) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                data: {
                    msg: "Could not find user: " + name
                }
            });
        } else {
            const data = {
                data: {
                    objects: row,
                }
            };
            res.json(data);
        }
    });
});

module.exports = router;