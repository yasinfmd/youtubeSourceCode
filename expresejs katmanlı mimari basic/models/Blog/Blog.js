const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const blogSchema = new Schema({
    text: {
        type: Schema.Types.String,
        required: true,
    },
    file: {
        type: Schema.Types.String,
    },
    date: {
        type: Schema.Types.Date
    },
    fav_count: {
        type: Schema.Types.Number
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true, versionKey: false })

const Blog = mongoose.model("Blog", blogSchema, "blog")
module.exports = Blog