const Visa = require("../models/Category.model");

//////////////////////////////////////////////////////////////////////////////
/* async function addVisa(req, res) {
  try {
    const preVisa = await Visa.findOne({ email: req.body.email });
    console.log(preVisa);
    if (preVisa) {
      res.status(404).send("This visa already exists");
    } else {
      const addVisa = new Visa(req.body);
      await addVisa.save();
      res.status(201).json(addVisa);
      console.log(addVisa);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
} */
async function addVisa(req, res) {
  try {
    const addVisa = await Visa.create(req.body);
    res.status(201).json(addVisa);
    console.log(addVisa);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getVisa(req, res) {
  var result = [];

  try {
    const visaData = await Visa.find();
    console.log("Visaaaa" + result + "asa");
    res.status(200).json(visaData);
    // console.log(visaData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getVisaArray(req, res) {
  try {
    const visaData = await Visa.find();
    var a = [];
    visaData?.map((item) => {
      a.push(item.Category);
    });
    console.log(a);
    res.status(200).json(a);
    // console.log(visaData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleVisa(req, res) {
  const visaId = req.params.id;
  try {
    const visaData = await Visa.findById(visaId);
    res.status(200).json(visaData);
    console.log(visaData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateVisa(req, res) {
  try {
    await Visa.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Visa Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteVisa(req, res) {
  const visaId = req.params.id;
  try {
    await Visa.findByIdAndDelete(visaId);
    res.status(200).json({ msg: "Visa Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getVisa,
  getSingleVisa,
  getVisaArray,
  addVisa,
  updateVisa,
  deleteVisa,
};
