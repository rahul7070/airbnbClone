const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
    topic: {type:String, required:true},
    image1: {type:String, required:true},
    image2: {type:String, required:true},
    image3: {type:String, required:true},
    image4: {type:String, required:true},
    rating: {type:Number, required:true},
    location: {type:String, required:true},
    bedroom: {type:Number, required:true},
    description: {type:String, required:true},
    tags: {type:String, required:true},
})

const PackageModel = new mongoose.model("package", packageSchema);

module.exports = {PackageModel}