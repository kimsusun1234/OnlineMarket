const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();


//khai bao cac bien route de dinh huong cac view
const indexRoutes = require('./routes/index.routes');
const accountRoutes = require('./routes/account.routes');
const productRoutes = require('./routes/product.routes');

const expressHandlebars = require('express-handlebars');

//connect vao mongo bang mongoose
const mongoose = require('mongoose');
const { json } = require('body-parser');
const url = 'mongodb+srv://kimsusun1234:theanh@onlinemarket.rnfcv.mongodb.net/OnlineMarket?retryWrites=true&w=majority';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {

    if (err) {
        console.log('Some error happened: ' + err.stack);
    }
    else {
        console.log('Connect to db successfully');
    }

});

mongoose.Promise = global.Promise;

// khai bao bien tham chieu den db
const db = mongoose.connection;
db.on('error', () => { console.error.bind(console, "Can't connect to MongoDB: ") });





//khúc này không biết comment gì
app.engine('.hbs', expressHandlebars());
app.set('view engine', '.hbs');

//Kiểu khi start server thì sẽ có 1 folder chứa tất cả tài nguyên, đặt tên cho nó là public
//tham chiếu đến fol có cùng cder này như cách tham chiếu đến file, folder cùng cáp (Vd: file ảnh ở trong public/logo.png => <img src="./logo.png")
app.use(express.static('public'));
app.use('*/vendor', express.static('public/vendor'));
app.use(bodyParser.urlencoded({extended: false}));//use de co the doc duoc req 
app.use(jsonParser);

//dùng các biến routes để định hướng view
//khi address bar là '/' thì sẽ sử dụng các câu lệnh điều hướng trong file indexRoutes, Nhugnwx cái khác tương tự
app.use('/', indexRoutes);
app.use('/accountDemo', accountRoutes);
app.use('/product', productRoutes);

app.listen(2020);