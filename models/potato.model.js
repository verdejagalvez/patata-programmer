const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: "String",
    size: "String",
    form: "String",
    color: "String",
    ref: "String",
    useRecipe: "String"
  },
  {
    timestamps: true,
  }
);

const Potato = mongoose.model('Potato', schema);

module.exports = Potato;