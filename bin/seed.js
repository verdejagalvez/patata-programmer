const mongoose = require('mongoose');
require('../config/db.config');

const Potato = require('../models/potato.model');

mongoose.connection
.dropDatabase()
.then(() => {
  Potato.create([
    {
      name: "Monalisa",
      size: "medium",
      form: "oval",
      color: "light brown",
      ref: "Semi-early harvest",
      useRecipe: "frying, boiling"
    },
    {
      name: "Red Scarlett",
      size: "medium",
      form:"round",
      color: "red",
      ref: "Semi-early harvest",
      useRecipe: "frying"
    },
    {
      name: "Grenailles",
      size: "small",
      form: "oval",
      color: "light brown",
      ref: "Early harvest",
      useRecipe: "boiling"
    },
    {
      name: "Gallega",
      size: "big",
      form: "round",
      color: "brown",
      ref: "Semi-early harvest",
      useRecipe: "frying, boiling"
    },

  ])
})
