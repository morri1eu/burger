var express = require('express')
var burger = require('./../models/burger')

var router = express.Router();

router.get('/', function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data })
        console.log(data)
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insert(["burger_name", 'devoured'], [req.body.burger_name, req.body.devoured], function (result) {
        res.json(result)
    })
})

router.put("/api/burgers/:id", function (req, res) {
    var cond = "id = " + req.params.id
    console.log(req.body)
    burger.update({ devoured: req.body.devoured }, cond, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end()
        }
        else res.status(200).end()
    })
})

module.exports = router