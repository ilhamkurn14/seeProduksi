const express = require("express");
const authenticationToken = require("../../middleware/authenticationToken");
const {handlerAddBahanBaku, handlerPutBahanBaku, handlerDeleteBahanBaku, handlerGetBahanBaku } = require("./handler");
const router = express.Router();

router.get("/", handlerGetBahanBaku);
router.post("/", handlerAddBahanBaku);
router.put("/:kode", handlerPutBahanBaku);
router.delete("/:kode", handlerDeleteBahanBaku);

module.exports = router;