const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const { handlerRegisterOwner, handlerLoginOwner, handlerAddAdmin } = require("./handler");
const router = express.Router();


router.post("/register", handlerRegisterOwner);
router.post("/login", handlerLoginOwner);
router.post("/admin/add", authenticationToken, handlerAddAdmin);

module.exports = router;