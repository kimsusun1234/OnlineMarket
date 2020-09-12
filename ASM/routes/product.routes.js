const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');
const categoriesController = require('../controllers/categories.controller');

//khai bao body parser de doc request
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

//khi file này được gọi thì mặc định address lúc này sẽ là  /product
//vi thế trong các thẻ a liên quan đến product thì href phải có /product đằng trước
//vd <a href="/product/newProduct"></a>
router.get('/', (req, res) => {

    productController.select(req, res)

});

//routes for insert new product, renderview
router.get('/insertProduct', (req, res) => {


    //getAll categories, then render the insertProduct view
    categoriesController.select(req, res);

});

router.post('/insert',urlencodedParser , (req, res) => {

    productController.insertProduct(req, res);

});



router.get('/category', (req, res) => {

    res.send('product category');

})


//routes for insert new category
router.get('/category/insertCategory', (req, res) => {

    res.render('insertCategories');

});

router.post('/category/insert', urlencodedParser, (req, res) => {

    categoriesController.insertCategory(req, res);

});


module.exports = router;