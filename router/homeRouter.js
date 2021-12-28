const express = require("express");
const ArrayofBlogs = require("../model/ArrayOfBlogs");
const router = express.Router();

router.get("/intro",(req,res) => {
    const arr1=ArrayofBlogs.filter((val) => val.id === 6);
    const arr2 = ArrayofBlogs.slice(2,4);
    res.status(200).json({success:true,message:"Successful...",arr1,arr2});
})

router.get("/latest",(req,res) => {
    const arr = ArrayofBlogs.slice(6, 9);
    res.status(200).json({success:true,message:"successful...",arr});
})

router.get("/latestarticles",(req,res) => {
    const numb = req.query.postNumber;
    const arr = ArrayofBlogs.slice(3,numb);
    const arr1 = ArrayofBlogs.slice(6,9);
    const arr2 = ArrayofBlogs.slice(0,3);
    console.log(arr2);
    res.status(200).json({success:true,message:"successful...",arr,arr1,arr2});
})

router.get("/lateststories",(req,res) => {
    const num = req.query.num;
    const arr = ArrayofBlogs.slice(1,num);
    res.status(200).json({success: true,message:"successful...",arr});
})

module.exports = router;