const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
    {
        file_name : String,
        file_url: String,
    }
)

module.exports = mongoose.model('File',fileSchema)