const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const viewsingleUser = asyncHandler(async(req,res)=>{
    const userData = await User.findlyById(req.param)
})