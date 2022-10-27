const { User } = require("../models/User");


const getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};

const createUser = async (req, res) => {
    const user = new User({ ...req.body });
    await user.save();
    res.send("User added");
};

const getUser = async (req, res) => {
    
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(user){
        res.send(user);
    } else {
        res.send("User Not Present");
    }
};

const deleteUser = async (req, res) => {

    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    res.send(deletedUser);
};

const updateUser = async (req, res) => {

    const userId = req.params.id;

    await User.updateOne({ userId }, 
        {   name: req.body.name, 
            email : req.body.email,
            contact: req.body.contact
       });
    res.send("User updated successfully");
};

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
}