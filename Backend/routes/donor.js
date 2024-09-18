const express = require("express");
const { getAlldonors, createDonor, updateDonor, getOneDonor, deleteDonor, getDonorsStats } = require("../controllers/Donor");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/", verifyTokenAndAuthorization, createDonor);

router.get("/", getAlldonors);

router.put("/:id", updateDonor);

router.get("/find/:id", getOneDonor);

router.delete("/:id", deleteDonor);

router.get("/stats", getDonorsStats);