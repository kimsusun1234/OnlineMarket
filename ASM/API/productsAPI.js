const ProductModel = require('../models/products.model');

exports.getProduct = async (req, res) => {

    await ProductModel.find({}).exec((err, result) => {

        if (err) {
            res.send(err);
        }
        else {
            const context = {

                data: result.map((child) => {

                    return {

                        _id: child._id,
                        name: child.name,
                        category: child.category,
                        des: child.des,
                        price: child.price,
                        amount: child.amount,
                        publisher: child.publisher,
                        image: child.image,
                        status: child.status,

                    };

                })

            };

            console.log('Get data successfully');
            console.log(context);

            //response biến result về browser, để Retrofit có thể lấy được result
            res.send(context.data);
        }

    });


}