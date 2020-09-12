const mongoose = require('mongoose');

const categorymodel = new mongoose.Schema({

    name:String,

});

module.exports = mongoose.model('categories',categorymodel);