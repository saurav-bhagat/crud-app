const mongoose = require('mongoose');

/**
 * In mongoose, every entity or table is a "collection"
 * And we define a schema for that collection in our models.
 * 
 */

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    contact: {
        type: String,
    }

});

const User = mongoose.model("User", UserSchema);

module.exports = { User };