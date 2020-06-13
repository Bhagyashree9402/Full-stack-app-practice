const express = require("express");
const router = express.Router();

router.post("/api", (req, res) => {
    console.log(req.body);

    res.json(req.body);
})

router.post("/api/test/:fname/:lname", (req, res) => {
    console.log(req.params);
    res.json(req.params);
})

router.put("/api/query", (req, res) => {
    console.log(req.query);
    res.json(req.query);


});
module.exports = router;