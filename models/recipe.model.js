const mongoose = require ('mongoose');
const Schema = mogoose.Schema;

const recipeSchema = new mongoose.Schema({
  recipe: {
    recipe: { type:String },
    date: { type:Date },
    trim: { type:Boolean },
    potato: { type: mongoose.Schema.Types.ObjectId, ref: 'potato' }
  },
  user: {
    user: { type: mongoose.Schema.Types.ObjectId },
    ref: 'User',
    required: { type:Boolean },
  }
  },    
    { timestamps: true, }
);

const Recipe = mogoose.model('Recipe', recipeSchema);
module.exports = Recipe;