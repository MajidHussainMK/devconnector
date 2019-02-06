const express = require("express");

const router = express.Router();

// will hit /api/users/test , wont hit /test
router.get("/test", (req, res) => res.json({ msg: "Users Arena" }));

module.exports = router;
