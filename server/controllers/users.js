const { v4: uuidv4 } = require('uuid');

let USERS = [];

const getUsers = (req, res) => {
    res.send(USERS);
};

const createUser = (req, res) => {
    const user = req.body;

    USERS.push({ ...user, id: uuidv4() });
    res.send("User added");
};

const getUser = (req, res) => {
    
    const singleUser = USERS.filter((user) => user.id === req.params.id);
    if(singleUser.length > 0){
        res.send(singleUser);
    } else {
        res.send("User Not Present");
    }
};

const deleteUser = (req, res) => {

    USERS = USERS.filter((user) => user.id !== req.params.id);
    res.send("User deleted Successfully");
};

const updateUser = (req, res) => {
    const user = USERS.find((user) => user.id === req.params.id);

    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;

    res.send("User updated successfully");
};

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
}