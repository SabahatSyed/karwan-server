const express = require("express");

const {
  getVisa,
  getSingleVisa,
  addVisa,
  updateVisa,
  getVisaArray,
  deleteVisa,
} = require("../controllers/visatypes.controllers");

const router = express.Router();
router.get("/get-visatypes", getVisa);
router.get("/get-visatypes/:id", getSingleVisa);
router.get("/get-visatypesarray", getVisaArray);
router.post("/add-visatypes", addVisa);
router.patch("/update-visatypes/:id", updateVisa);
router.delete("/delete-visatypes/:id", deleteVisa);

module.exports = router;
