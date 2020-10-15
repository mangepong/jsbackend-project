var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const data = {
        data: {
            msg: "Välkommen till min backend för projektet i kursen jsramverk"
        }
    };

    res.json(data);
});

module.exports = router;