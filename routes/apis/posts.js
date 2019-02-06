const express = require("express");

const router = express.Router();

// will hit /api/posts/test , wont hit /test
router.get("/test", (req, res) => res.json({ msg: "Posts Arena" }));

module.exports = router;
