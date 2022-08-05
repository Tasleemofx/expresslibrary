const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String, required
    },
    author: {
        type: Schema.Types.ObjectID, 
        ref: "Author",
        required
    },
    summary:{
        type: String, required
    },
    isbn: {
        type: String,
        required
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: "Genre"
    }]

})

BookSchema.virtual('url')
.get(()=>{
    return '/catalog/book/' + this.id
})

module.exports = mongoose.model('Book', BookSchema)