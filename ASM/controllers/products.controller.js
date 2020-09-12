const ProductModel = require('../models/products.model');
const CategoriesModel = require('../models/productCategories.model');
const multer = require('multer');
const variables = require('../variables');

//khai báo biến storage để định nghĩa nơi lưu trữ file
const storage = multer.diskStorage({

    //khai báo các options cho storage
    //cb = callback
    destination: (req, file, cb) => {

        //định nghĩa folder sẽ chứa file được upload lên server
        //tham số đầu tiên là tham số thể hiện lỗi
        cb(null, './public/uploads');

    },

    filename: (req, file, cb) => {

        //định nghĩa filename, giữ nguyên tên gốc
        console.log('Original Name')
        console.log(file.originalname);
        cb(null, file.originalname);

    }

});

//định nghĩa bộ nhớ cho multer để truyền file vào
//định nghĩa giới hạn dung lượng file, tính đơn vị byte,1 * 1024 * 1024 * 4=  4 mb
const upload = multer({ storage: storage, limits: { fileSize: 1 * 1024 * 1024 * 4 } });




exports.insertProduct = async (req, res) => {


    //phương thức post với /upload sẽ lấy dữ liệu ảnh từ req có name là pic và sau đó upload lên server thông qua biến upload
    const uploadTask = upload.single('image');
    //--------------------UPLOAD IMAGE-----------------------------

    // //lấy đuôi của file được submit lên
    // const extname = path.extname(req.file.path);
    // console.log(extname);


    // //nếu khác các đuôi được cho sẵn thì return
    // if (extname != '.jpg' && extname != '.png')
    // {
    //     return res.send('wrong file type');
    // }

    //req phải ở trong uploadTask mới đọc được file, nếu để ở ngoài thì sẽ là undefine
    await uploadTask(req, res, (err) => {

        //nếu có lỗi
        if (err) {

            //nếu lỗi là lỗi của multer
            if (err instanceof multer.MulterError) {
                //trả về
                return res.send('Error!');
            }
            //kông phải lỗi của multer thì trả về lỗi
            return console.log(err);

        }

        //nếu không có lỗi thì log ra
        // console.log(req.file);

        let newProduct = new ProductModel({

            name: req.body.name,
            category: req.body.category,
            des: req.body.des,
            price: req.body.price,
            amount: req.body.amount,
            publisher: req.body.publisher,
            image: "./uploads/" + req.file.originalname,
            status: req.body.status,

        });

        newProduct.save((err, product) => {

            if (err) {

                res.render('insertProductFail', { productCategories: variables.categories.result });
                console.log({
                    result: 'false',
                    data: {},
                    message: 'Some error happened: ' + err,
                });

            }
            else {
                res.render('insertProductSuccess', { productCategories: variables.categories.result });

                console.log({
                    result: 'ok',
                    data: product,
                });

            }

        });

    });



}

exports.select = async (req, res) => {

    await CategoriesModel.find({}).sort({ name: 1 }).select({

        name: 1,

    }).exec((err, data) => {

        if (err) {

            res.send(err.stack);

        }
        else {

            //tạo object mới, sau đó map lại data của mongoose trả về để tạo ra một "data" mới, của mình
            //thì sẽ không bị lỗi andlebars: Access has been denied to resolve the property "_id" because it is not an "own property" of its parent.
            variables.categories = {

                result: data.map((child) => {

                    return {
                        name: child.name,
                        _id: child.id
                    }

                })

            };
            console.log('Get category successfully');
            console.log(variables.categories.result);

        }

    });

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

            res.render('product', { products: context.data , categories: variables.categories.result});
        }

    });

}