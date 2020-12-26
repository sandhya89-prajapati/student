const express =require("express")

const router = express.Router()

const addUser = require("../controller/usercontroller")
const viewUser = require("../controller/viewcontroller")

router.post("/adduser",addUser)
router.get('/view',viewUser)

module.exports = router