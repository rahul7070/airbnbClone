const express = require('express');
const {PackageModel} = require('../model/package.model')
const packageRouter = express.Router();


packageRouter.get("/", async (req, res)=>{
    try {
        const data = await PackageModel.find();
        res.send(data)
    } catch (error) {
        res.status(404).send(error);
    }
})

packageRouter.post("/add", async (req, res)=>{
    try {
        const payload = new PackageModel(req.body);
        await payload.save();
        res.send({"msg":"success"})
    } catch (error) {
        res.status(404).send(error);
    }
})

packageRouter.patch("/update/:id", async (req, res)=>{
    try {
        const id = req.params.id;
        const payload = await PackageModel.findByIdAndUpdate(id, req.body);
        res.send({"msg":"success"})
    } catch (error) {
        res.status(404).send(error);
    }
})

packageRouter.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id; // Access the 'id' parameter from the route URL
        const deletedPackage = await PackageModel.findByIdAndRemove(id);

        if (!deletedPackage) {
            return res.status(404).json({ msg: "Package not found" });
        }

        res.json({ msg: "Package deleted successfully", deletedPackage });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
});

module.exports = {packageRouter}