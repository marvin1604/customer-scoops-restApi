const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors());


//ROUTES
const routes = require("./routes/index.router")
app.use("/api", routes)

app.get("/api", (req,res)=> res.send("Ingresa a Industrias"))
app.get("/api/pong", (req,res)=> res.send("ping"))
app.get("/ping", (req,res)=> res.send("pong"))


app.listen(process.env.PORT || 3000, () =>{
    console.log("servidor esta corriendo correctamente", process.env.PORT || 3000);
})
