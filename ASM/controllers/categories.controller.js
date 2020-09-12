const CategoriesModel = require('../models/productCategories.model');
const { countDocuments } = require('../models/productCategories.model');
const variables = require('../variables');

//exports kiểu này thì khi require sẽ được một đối tượng, từ đối tượng đó mới tham chiếu về đến hàm này
//module.exports là kiểu khi require sẽ được luôn một hàm mình đã exports nó
exports.insertCategory = (req, res) => {

    let newCategory = new CategoriesModel({

        name: req.body.name,

    });

    newCategory.save((err) => {

        if (err) {

            res.render('insertCategoriesFail');
            console.log({
                result: 'false',
                data: {},
                message: 'Some error happened: ' + err,
            });
        }
        else {
            res.render('insertCategoriesSuccess');

            console.log({
                result: 'ok',
                data: {
                    id: req.body.name,
                    message: 'Insert Successfully',
                },
            });

        }

    });

}

//hàm find để select hết dữ liệu ra, tham số là object, trong object mình có thể định nghĩa được bộ lọc, giống như WHERE trong SQL
//select là để xác định những trường nào được hiển thị
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
            res.render('insertProduct', {productCategories : variables.categories.result});
            
        }

    });
    

}
