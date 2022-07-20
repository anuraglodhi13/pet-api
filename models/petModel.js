const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Name: String,
    Type: String,
    Breed: String,
    Age: Number
});

module.exports = mongoose.model('PetModels',PostSchema);