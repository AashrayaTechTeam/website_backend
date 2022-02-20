const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let STATE_REPRESENTATIVE_SCHEMA = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [2, "Name is too short!"],
      maxLength: 20,
    },
    tag: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: [true, "What is your contact number?"],
    },
    photo: {
      type: String,
      required: [true, "Please provide valid url"],
    },
    pin_code: {
      type: Number,
      required: true,
    },
    core_team: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  {
    collection: "STATE_REPRESENTATIVES",
  }
);
const STATE_REPRESENTATIVE = mongoose.model(
  "state_representative",
  STATE_REPRESENTATIVE_SCHEMA
);

module.exports = STATE_REPRESENTATIVE;
