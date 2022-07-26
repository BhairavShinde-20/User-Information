const userModel = require("./../models/user");

// post/create new data
exports.createUser = async (req, res) => { // usre sathi export karne

    try {
        const users = await new userModel(req.body).save();
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ err });
    }
}
//get/read data for all user
exports.getAllUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users)
    } catch (err) {
        res.json()
    }
}
// get/read one person data
exports.getUser = async (req, res) => {
    try {
        const users = await userModel.find({ _id: req.params.userId });
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// delete one person data
exports.deleteUser = (req, res) => {
    userModel.findOneAndDelete({ _id: req.params.userId }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}
// put/update one person data
exports.updateUser = (req, res) => {
    userModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, data) => {
        if (err) {
            res.json({ err })
        } else {
            res.json(data);
        }
    })
}