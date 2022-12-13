const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors());


//ROUTES
const routes = require("./routes/index.router")
app.use("/api", routes)



app.listen(process.env.PORT || 3000, () =>{
    console.log("servidor esta corriendo correctamente", process.env.PORT || 3000);
})
