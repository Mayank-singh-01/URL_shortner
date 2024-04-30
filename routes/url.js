const express = require("express");

const {handelGenerateUrl} = require("../controllers/user")
const router = express.Router();

router.post("/",handelGenerateUrl)


module.exports = router;