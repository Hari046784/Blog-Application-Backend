const express = require("express");
const { getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUserId } = require("../controllers/blog.controller");
const router = express.Router();

//Get All blogs data
router.get("/", getAllBlogs);

//Get blog data from particular Id
router.get("/:id", getById);

//Get the blog data on particular id
router.get("/user/:id", getByUserId);

//Add blog
router.post("/add", addBlog);

//Update the blog on particular id
router.put("/update/:id", updateBlog);

//Get All blogs data
router.delete("/:id", deleteBlog);

module.exports = router;