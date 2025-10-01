const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;