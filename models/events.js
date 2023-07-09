const mongoose=require('mongoose');
const EventSchema=mongoose.Schema({
    title: String,
    description: String,
    time: Number,
    date: Date,
    image: Object,
    createDate:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Events',EventSchema)