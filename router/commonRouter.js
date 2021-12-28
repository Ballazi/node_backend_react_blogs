const express = require("express");
const router = express.Router();
const ArrayofBlogs = require("../model/ArrayOfBlogs");


router.get("/",(req,res) => {
    let cat = req.query.category;
    const arr = ArrayofBlogs.filter((val) => val.category === cat);
    res.status(200).json({success:true,message:"Successful...",arr});
})


module.exports = router;