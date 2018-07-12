const mongodb = require('mongoose');
const schema = mongodb.Schema;

//create schema library
const BookSchema = new schema({
    name: {
        type: String,
        required: [true, 'Name fild']
    },
    price: {
        type: Number,
        required: [true, 'Price!']
    }
})

//export
const book = mongodb.model("book", BookSchema);
module.exports = book;