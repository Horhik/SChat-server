const router = require("express").Router()


const dt = "HiMAn"
router.get('/', (req, res) => res.send(dt));

module.exports = router;


