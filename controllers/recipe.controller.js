const Recipe = require('../models/potato.model');
const mongoose = require('mongoose');

module.exports.registerRecipe = (req, res, next) => {
  res.render('profile/registerRecipe')
};