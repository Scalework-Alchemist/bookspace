'use strict';

const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelSchema = new Schema({
  id: Number,
  name: String,
  comics: Object,
  events: Object,
  description: String,
  image: String,
  urls: String
});

module.exports = mongoose.model("Model", modelSchema);
