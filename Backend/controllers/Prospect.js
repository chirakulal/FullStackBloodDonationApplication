const Prospect = require("../models/Prospect");


const createProspect = async (req, res) => {

    try {
        const newProspect = Donor(req.body);
        const Prospect = await newProspect.save();
        res.status(201).json(donor);
    } catch (error) {
        res.status(500).json(error);

    }
};



const getAllProspect = async (req, res) => {
    try {
        const Prospect = await Prospect.find().sort({ createdAtL: -1 });
        res.status(200).json(Prospect)

    } catch (error) {
        res.status(500).json(error)

    }

}



const updateProspect = async (req, res) => {
    try {
        const updateProspect = await Prospect.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(201).json(updateProspect)
    } catch (error) {
        res.status(500).json(error)

    }
};


const getOneProspect = async (req, res) => {
    try {
        const Prospect = await Prospect.findById(req.params.id)
        res.status(200).json(Prospect);


    } catch (error) {
        res.status(500).json(error);

    }
};



const deleteProspect = async (req, res) => {
    try {
        await Prospect.findByIdAndDelete(req.params.id)
        res.status(500).json("Prospect deleted succesfully")

    } catch (error) {
        res.status(500).json(error)

    }
};


module.exports = { deleteProspect, getOneProspect, getAllProspect, updateProspect, createProspect }