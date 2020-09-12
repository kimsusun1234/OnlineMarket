var UsersModel = require('../models/users.model');

//export cac ham CRUD
exports.insertUser = (req, res) => {

    let newUser = new UsersModel({
        id: req.body.id,
        password: req.body.pass,
        birthday: req.body.birthday,
        phone: req.body.phone,
        address: req.body.address,
        image: req.body.image,
        role: "customer",
        status: true,
    });

    newUser.save((err) => {
        if (err) {
            res.json({
                result: 'false',
                data: {},
                message: 'Some error happened: ' + err,
            });
        }
        else {
            res.json({
                result: 'ok',
                data: {
                    id: req.body.id,
                    message: 'Insert Successfully',
                },
            });
        }
    });
}