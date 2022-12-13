const mongoose = require("mongoose")

const password = '1115Luciana'
const dbname = 'cumtomerscoops'
// const uri = `mongodb+srv://walter-rodriguez-dev:${password}@cluster0.btzu7rp.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const uri2 = 'mongodb://mongo:8mFdCt953a9ZYlr4RG1H@containers-us-west-155.railway.app:7055';

mongoose.set('strictQuery', false);

module.exports = ()=> mongoose.connect(uri2, {useNewUrlParser: true, useUnifiedTopology: true})

