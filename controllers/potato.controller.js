const Potato = require('../models/potato.model');

module.exports.potatoList = (req, res, next) => {
    res.render('potatoes/variety')
  };
