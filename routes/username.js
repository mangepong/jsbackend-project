var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/db.sqlite');


router.post('/', function(req, res) {
    const email = req.body.email;
    // console.log(email);
    let sql = "SELECT name FROM users WHERE email = ?";

    db.each(sql, [email], (err, row) => {
        if (err) {
            res.status(400).json({
                data: {
                    msg: "Could not find user: " + email
                }
            });
        } else {
            // console.log(`${row.name}`)
            const data = {
                data: {
                    username: `${row.name}`,
                }
            };
            res.json(data);
        }
    });
});


module.exports = router;