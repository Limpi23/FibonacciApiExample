const express = require("express");
const router = express.Router();

const getFibonacci = require("../controllers/fibonacci.controller");

router.get("/fibonacci/:num", function (req, res) {
  const value = getFibonacci(req.params.num);
  res.status(200).send(value.toString());
});

module.exports = router;
