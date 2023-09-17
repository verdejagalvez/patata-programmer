const mongoose = require ('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    time: { type: String },
    potato: { type: mongoose.Schema.Types.ObjectId, ref: 'Potato' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: { type: String },
    likes: { type: Number, default: 0 }
  },    
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;