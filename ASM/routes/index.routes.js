const express = require('express');
const router = express.Router();

//các phương thức get, post sẽ được gọi khi thanh địa chỉ được gọi với phương thức tương ứng, có phần mở rộng bằng với '...'
router.get('/', (req, res) => {

    res.render('index');

});

router.get('/home', (req, res) => {

    //trang chur dashboard
    res.render('home');

});

router.get('/account', (req, res) => {

    //trang chur dashboard
    res.render('account');

});

router.get('/order', (req, res) => {

    //trang chur dashboard
    res.render('order');

});


//route de goi cac API
router.get('/getProductAPI', (req, res) => {

    const ProductAPI = require('../api/productsAPI');
    ProductAPI.getProduct(req, res);

});

router.get('/getImage', (req, res) => {

    let path = require('path');

    //__dirname chính là đường dẫn tới file hiện tại (file đang code index.routes), nghĩa là đường dẫn hiện tại là F:\Theanh\mob402\routes
    //nên ../public để lùi lại một folder, truy xuất về ASM thì mới thấy được folder public
    let absolutePath = path.join(__dirname, '../public', req.query.image);

    console.log('Absolute Path------------------------------');
    console.log(absolutePath);

    res.sendFile(absolutePath, (err) => {

        if (err){

            console.log('Error happpened-----------------------------------------')
            //neu loi thi log ra
            console.log(err);

        }
        else{

            //khong co loi thi log ra
            console.log('Successfully');

        }

    });

});




module.exports = router; 