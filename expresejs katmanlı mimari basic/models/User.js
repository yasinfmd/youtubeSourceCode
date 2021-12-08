const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    surname: {
        type: Schema.Types.String,
        required: true,
    },
    full_name: {
        type: Schema.Types.String
    },
    age: {
        type: Schema.Types.Number,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,

    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    gender: {
        type: Schema.Types.String,
        required: true,
    },
    profile_picture: {
        type: Schema.Types.String
    },
    activity_areas: {
        type: Schema.Types.Array
    },
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Blog"
        }
    ]

}, { timestamps: true })

const User = mongoose.model("User", userSchema, "user")
module.exports = User