const express = require("express");

const router = express.Router();

const { getCharts } = require("../controllers/chartController");

router.route("/charts").get(getCharts);


module.exports = router;