const express = require("express")
const router = express.Router()
const corr = require("../controllers/corr.controller")

router.get("/", corr.getCorrs)
router.post("/", corr.createCorr)
router.get("/:id", corr.getCorr)
router.put("/:id", corr.editCorr)
router.delete("/:id", corr.deleteCorr)

module.exports = router