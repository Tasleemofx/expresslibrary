const mongoose = require('mongoose');
const Schema = mongoose.Schema


const AuthorSchema = new Schema({
    firstname: {
        type: String, 
        required: true,
        maxlength: 100
    },
    family_name: {
        type: String,
        required,
        maxlength: 100
    },
    date_of_birth: Date,
    date_of_death: Date
})
AuthorSchema.virtual('name')
.get(()=>{
    let fullname = '';
    if(this.first_name && this.family_name){
        fullname = this.family_name + ', ' + this.first_name
    }
    if(!this.first_name || this.family_name){
        fullname = ''
    }
    return fullname
})

AuthorSchema.virtual('lifespan').get(()=>{
    let lifetime_string = ''
    if(this.date_of_birth){
        lifetime_string =
        this.date_of_birth.getYear().toString()
    }
    lifetime_string += '-'
    if(this.date_of_death){
        lifetime_string += this.date_of_death.getYear()
    }
    return lifetime_string
})

AuthorSchema.virtual('url')
.get(()=>{
    return '/catalog/author/' + this.id
})
module.exports = mongoose.model('Author', AuthorSchema)
