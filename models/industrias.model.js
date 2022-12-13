const mongoose = require('mongoose')
const {Schema} = mongoose

const IndustriaSchema = new Schema({
    title: String,
    rate: String,
    lead: String
})

const ModelIndustrias = mongoose.model("industrias", IndustriaSchema)

module.exports = ModelIndustrias