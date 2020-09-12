const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    orderDate: String,
    user: {type : Schema.Types.ObjectId, ref:'users'},
    products: [{
        product: Object,
        amount: Number, //mỗi phần tử của mảng products là một Object, trong Object, 
                        //có thuộc tính product có kiểu Object, chứa toàn bộ thông tin của món hàng, amount thể hiện số lượng của món hàng đó
    }],
});

module.exports = mongoose.model('orders', orderSchema);