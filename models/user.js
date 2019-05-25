// 1. Include required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

// 2. Define the MongoDB schema for the people collection
const personSchema = new Schema({
    first       :   {type: String, required: 'FirstNameInvalid'},
    last        :   String,
    email       :   {type: String, unique: true, lowercase: true, required: 'EmailInvalid'},
    password    :   {type: String, required: 'PasswordInvalid'}
});

// 3. Paginate the results
personSchema.plugin(mongoosePaginate);

// 4. Export the Person model
module.exports = mongoose.model('Person', personSchema);
