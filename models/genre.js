const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {
        type: String,
        min: 3,
        max: 100,
        required
    }
})

GenreSchema.virtual('url')
.get(()=> "/catalog/genre" + this.name )

module.exports = mongoose.model('Genre', GenreSchema)