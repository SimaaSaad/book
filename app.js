

const express = require("express")

const mongoose =require ("mongoose")
const app = express()
const taskRoutes = require("./routes/task.js")
const bookRoutes=require("./routes/book.js")
const UserRoutes = require("./routes/user.js")
const CategoryRoutes = require("./routes/Category.js")
const AuthorRoutes = require("./routes/Author.js")


app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/tasks")

.then(()=>console.log("Connexion a MongoDb réussie!!"))
.catch((e)=>console.log("Connexion a MongoDb échouée!!", e))


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-with, Content,Accept,Content-Type,Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT,DELETE,PATCH,OPTIONS"
    );
    next();
  });
// app.use((req,res,next)=>{
//    console.log("requete reçue !")
//    next()
// })
// app.use((req,res,next)=>{
//     res.status(201)
//     next()
//  })
 


// app.use((req,res,next)=>{
//     res.json({message: "votre requete a bien été recue !"})
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("repense envoyée avec succès !")
//     next()
// })

app.use("/api/tasks",taskRoutes)
app.use("/api/auth/",UserRoutes)
app.use("/api/books",bookRoutes)
app.use("/api/Category",CategoryRoutes)
app.use("/api/Author",AuthorRoutes)
module.exports = app