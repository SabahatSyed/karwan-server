const express = require("express");

const {
  getVisa,
  getSingleVisa,
  addVisa,
  updateVisa,
  getVisaArray,
  deleteVisa,
} = require("../controllers/Designations.controllers");

const router = express.Router();
router.get("/get-designations", getVisa);
router.get("/get-designations/:id", getSingleVisa);
router.get("/get-designationsarray", getVisaArray);
router.post("/add-designations", addVisa);
router.patch("/update-designations/:id", updateVisa);
router.delete("/delete-designations/:id", deleteVisa);

module.exports = router;
