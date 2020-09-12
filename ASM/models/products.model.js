const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: String,
    category: String,
    des: String,
    price: {type: Number, default: 0, min: 0},
    amount: {type: Number, min: 0, default: 0},
    publisher: String,
    image: String,
    status: {type:Boolean, default: true}//true nghia la con hang

});

module.exports = mongoose.model('products', productSchema);