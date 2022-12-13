const mongoose = require("mongoose")

const password = '1115Luciana'
const dbname = 'cumtomerscoops'
const uri = `mongodb+srv://walter-rodriguez-dev:${password}@cluster0.btzu7rp.mongodb.net/${dbname}?retryWrites=true&w=majority`
// const uri2 = "mongodb://localhost:27017/fruitsDB"

mongoose.set('strictQuery', false);

module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

