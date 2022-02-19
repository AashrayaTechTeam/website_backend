const { response } = require("express");
const express = require("express");
const STATE_REPRESENTATIVE = require("./representative_schema");
const router = express.Router();

router.get("/state/representative/:state", async (req, res) => {
  STATE_REPRESENTATIVE.find(
    { state: req.params.state },
    function (error, response) {
      if (error) {
        console.log(error);
        res
          .status(400)
          .send({
            status: "error",
            message: "Error while fetching data to db",
          });
      } else {
        res.send(response);
      }
    }
  );
});

router.put("/state/representative", async (req, res) => {
  STATE_REPRESENTATIVE.create(req.body, (error, resp) => {
    if (error) {
      console.log(error);
      res
        .status(400)
        .send({ status: "error", message: "Error while inserting data to db" });
    } else {
      res
        .status(200)
        .send({ status: "success", message: "Data inserted successfully" });
    }
  });
});

router.get("/", async (req, res) => {
  res.send("hello");
});

module.exports = router;
