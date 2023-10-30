const Task=require("../models/task.js")
const fetchTasks=( req, res) => {
    Task.find()
    .then((tasks)=> res.status(200).json({
        model : tasks,
        message: "success"
    }))
    .catch((error)=>{
        res.status(400).json({
            error: error.message, // recuperer tout les erreur error.errors : les erreurs pour final client 
            message: "problème d'extraction",
        })
    })

}
const getTaskById=(req,res)=>{
    Task.findOne({ _id: req.params.id})
        .then((task)=>{
            if(!task){
                res.status(404).json({
                    message:"l'objet non trouvé ",
                })
                return
       

            }
            
                res.status(200).json({
                    model: task,
                    message: "objet touvé",
                })
                    
            
           
        })
      .catch((error)=>res.status(400).json({
        error: error.message,
        message:"objet non trouvé"
    })) 

}
const addTask=(req,res)=>{
    
    console.log(req.body)
    let task = new Task(req.body) //req.body : l'objet créé
    task.save().then(()=> //connection asynchrone
    res.status(201).json({
        model: task,
        message: "objet créé !",

    })
    )
    .catch((error) =>
          res.status(400).json({
            error: error.message,
            message: "Invalid data !!!",
          })
        );
    // console.log("ici")
}
const updateTask = (req , res)=>{
    Task.findOneAndUpdate({ _id: req.params.id},
        req.body,{ new: true})
        .then((task)=>{
            if(!task){
                res.status(404).json({
                    message:"l'objet non trouvé ",
                })
                
       

            }
            else{
                res.status(200).json({
                    model: task,
                    message: "objet modifié",
                })
                    
            }
           
        })
      .catch((error)=>res.status(400).json({
        error: error.message,
        message:"objet non trouvé"
    })) 

}
const deleteTask=(req , res)=>{
    Task.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).json({message:"objet supprimé"}))
    .catch((error)=>res.status(400).json({error}))
}


module.exports={
    fetchTasks:fetchTasks,
    addTask:addTask,
    getTaskById:getTaskById,
    updateTask:updateTask,
    deleteTask:deleteTask,
   
}
// autre maniaire
// module.exports={
//     fetchTasks,
//     addTask,
//     getTaskById,
//     updateTask,
//     deleteTask,
// }