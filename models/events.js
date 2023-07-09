const mongoose=require('mongoose');
const EventSchema=mongoose.Schema({
    title: String,
    description:String,
    location:String,
    date: Date,
    image: String,
    createDate:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('Events',EventSchema)