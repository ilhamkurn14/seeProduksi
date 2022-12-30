const express = require('express');
const { handlerAddProduk, handlerGetAllProduk, handlerDeleteProduk, handlerPutProduk, handlerPutProdukBahan, handlerAddBahanInProduk, handlerDeleteBahanInProduk } = require('./handler');
const router = express.Router();

// For Produk 
router.get('/', handlerGetAllProduk);
router.post("/", handlerAddProduk);
router.put("/:kode_produk", handlerPutProduk);
router.delete("/:kode_produk", handlerDeleteProduk);

// For Bahan in Produk
router.post("/:kode_produk/bahan", handlerAddBahanInProduk);
router.put("/:kode_produk/bahan/:kode_bahan", handlerPutProdukBahan);
router.delete("/:kode_produk/bahan/:kode_bahan", handlerDeleteBahanInProduk);
module.exports = router;