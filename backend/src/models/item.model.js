const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Item', itemSchema);

