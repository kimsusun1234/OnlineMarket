const mongoose = require('mongoose');


//Mongoose hoạt động dựa theo lược đồ (Schema)
//Định nghĩa một lược đồ cho users (tự hiểu các ý nghĩa của các thuộc tính))
const usersSchema = new mongoose.Schema({
    id: String,
    password: String,
    birthday: Date,
    phone: String,
    address: String,
    image: String,
    role: String,
    status: Boolean
});

//tạo model cho Schema vừa tạo
//export model
module.exports = mongoose.model('users', usersSchema);