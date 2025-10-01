const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    name: String,
    items: [{type: Schema.Types.ObjectId, ref: 'item'}]
})

const Category = mongoose.model('categorie', categorySchema);

module.exports = Category;