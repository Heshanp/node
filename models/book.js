var mongoose = require('mongoose');

var genSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Book = module.exports = mongoose.model('Book',genSchema);
module.exports.getBooks = function(callback,limit){
    Book.find(callback).limit(limit);
};

module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
};