const express = require("express");

const router = express.Router();

// will hit /api/profile/test , wont hit /test
router.get("/test", (req, res) => res.json({ msg: "Profile Arena" }));

module.exports = router;
