const express = require("express");
const fact = require("./fact");
const landmark = require("./landmark");

const router = express.Router();

router.use(fact);
router.use(landmark);

module.exports = router;