const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        descrition: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = Exercise;
