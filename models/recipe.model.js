const mongoose = require ('mongoose');

const recipeSchema = new mongoose.Schema({
    recipe: { type: String },
    time: { type: String },
    potato: { type: mongoose.Schema.Types.ObjectId, ref: 'Potato' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    avatar: { type: String },
  },    
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;