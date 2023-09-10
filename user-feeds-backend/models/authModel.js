const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    isEnable: {
        type: Boolean,
        default: false
    },
    interestedFeeds: {
        type: [String]

    }


});

const authModel = mongoose.model("authmodel", authSchema);
module.exports = authModel;
