const mongoose = require('mongoose')

const Schema= mongoose.Schema

const BookInstanceSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required},
    imprint: {
        type: String, required

    },
    status: { type:String, required,
    enum: ['Available', 'Maintenance', 'Loaned', Reserved],
default: 'Maintenance'},
due_back: { type: Date, default: Date.now}
})

BookInstanceSchema
.virtual('url')
.get(()=> '/catalog/bookinstance/' + this.id)

module.exports = mongoose.model('BookInstance', BookInstanceSchema)