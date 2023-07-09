const mongoose = require('mongoose');

const OrganizerSchema = mongoose.Schema({
    name : String,
    establishmentDate : Number,
    work : String,
    registerNumber : Number
});
module.exports= mongoose.model('Organizer', OrganizerSchema);