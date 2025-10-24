const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    status: {
        type: String,
        lowercase: true,
        enum: ['pending', 'in progress', 'completed', 'cancelled'],
        default: 'pending',
        required: true
    },
    cart: {
        type: Array,
        required: true
    },
    estimatedDelivery: {
        type: String,
        required: true
    },
    orderPrice: {
        type: Number,
        required: true,
        min: 0
    },
    address: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;