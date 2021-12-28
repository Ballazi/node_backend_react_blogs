const express = require("express");
const ArrayofBlogs = require("../model/ArrayOfBlogs");
const router = express.Router();

router.get("/",(req,res) => {
    const author = req.query.author;
    const arr = ArrayofBlogs.find((val) => val.author === author);
    const arr1 = ArrayofBlogs.filter((val) => val.author === author);
    res.status(200).json({success:true,message:"successful...",arr,arr1});
    log([...arr],arr1);
})

module.exports = router;