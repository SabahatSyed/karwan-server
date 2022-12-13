const express = require("express");

const {
  getVisa,
  getSingleVisa,
  addVisa,
  updateVisa,
  getVisaArray,
  deleteVisa,
} = require("../controllers/Category.controllers");

const router = express.Router();
router.get("/get-category", getVisa);
router.get("/get-category/:id", getSingleVisa);
router.get("/get-categoryarray", getVisaArray);
router.post("/add-category", addVisa);
router.patch("/update-category/:id", updateVisa);
router.delete("/delete-category/:id", deleteVisa);

module.exports = router;
