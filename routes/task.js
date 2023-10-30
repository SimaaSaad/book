
const express = require("express")
const router= express.Router()
const Task= require('../models/task.js')
const taskController = require("../controllers/task.js")
const auth = require("../middlewares/auth")


router.get("/",auth.loggedMiddleware,auth.isadmin,taskController.fetchTasks)
router.get("/:id",taskController.getTaskById)
router.post("/",taskController.addTask)
//patch:envoyer selement le param qui va le modifier
router.patch("/:id", taskController.updateTask)
//patch:envoyer l'objet complet
// app.put("/api/tasks/:id", (req , res)=>{
//     console.log(req.body)
//     console.log(req.params.id)
//     res.send(req.body)
// })
router.delete("/:id", taskController.deleteTask)
//na3ml export ll objet lkol
module.exports = router