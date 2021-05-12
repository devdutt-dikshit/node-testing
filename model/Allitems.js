const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Details:String,
})

module.exports = mongoose.model('list_items',listSchema)