const express = require("express");
const ArrayofBlogs = require("../model/ArrayOfBlogs");
const router = express.Router();

router.get("/",(req,res) => {
    const id = req.query.id;
    const obj = ArrayofBlogs.find((val) => val.id === parseInt(id));
    const arr = ArrayofBlogs.slice(1,4);
    res.status(200).json({success:true,message:"successful...",obj,arr});
})

module.exports = router;