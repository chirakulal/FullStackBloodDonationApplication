const express = require("express");
const { createProspect, getAllProspect, updateProspect, deleteProspect, getOneProspect } = require("../controllers/Prospect");
const router = express.Router();


router.post("/", createProspect);

router.get("/", getAllProspect);

router.put("/:id", updateProspect);

router.delete("/:id", deleteProspect);

router.post("/find/:id", getOneProspect);

module.exports = router;

