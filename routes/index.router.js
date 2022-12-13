const express = require("express")
const controller = require("../controllers/index.controllers")
const router = express.Router()

router.get("/industrias", controller.index)
module.exports = router