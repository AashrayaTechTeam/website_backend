const express = require("express");
const STATE_REPRESENTATIVE = require("../STATE_REPRESENTATIVE/representative_schema");
const router = express.Router();

router.get("/volunteers/:tag", async (req, res) => {
  STATE_REPRESENTATIVE.find({ tag: req.params.tag }, function (error, response) {
    if (error) {
      console.log(error);
      res.status(400).send({
        status: "error",
        message: "Error while fetching data to db",
      });
    } else {
      res.send(response);
    }
  });
});

router.get("/core_team/:team", async (req, res) => {
  STATE_REPRESENTATIVE.find({ core_team: req.params.team }, function (error, response) {
    if (error) {
      console.log(error);
      res.status(400).send({
        status: "error",
        message: "Error while fetching data to db",
      });
    } else {
      res.send(response);
    }
  });
});

module.exports = router;
