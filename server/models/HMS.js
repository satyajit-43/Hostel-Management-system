const mongoose = require('mongoose')

const HmsSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const HmsModel = mongoose.model("student",HmsSchema)
module.exports = HmsModel