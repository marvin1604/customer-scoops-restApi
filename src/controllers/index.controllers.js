const controller = {}

const conection = require('../dbConnection/connection')
const ModelIndustrias = require('../models/industrias.model')

controller.index = async(req, res) =>{
    try{
        await conection()
        const allIndustrias = await ModelIndustrias.find();
        res.send(allIndustrias);
    }catch(err){
        console.log(err)
    }
}

module.exports = controller

// mongodb+srv://walter-rodriguez-dev:<password>@cluster0.btzu7rp.mongodb.net/?retryWrites=true&w=majority