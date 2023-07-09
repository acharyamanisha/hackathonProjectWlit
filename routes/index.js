var express = require('express');
var router = express.Router();
const Events = require("../modes/events");

/* GET home page. */
router.get('/', function(req, res) {
  Events.find().then((events)=>{
    res.render('index', { title: 'ReadyForSewa',eventList:events });
  })
});
router.post("/saveEvent",async function(req,res){
  let event =new Events( {
    "title": req.body.title,
    "description": req.body.description,
    "time":req.body.time,
    "date":req.body.date,
    "image":req.body.image
  });
   await Event.insertMany(event);
  // expenses.push({ ...formData, _id: expenses.length + 1 });
  res.redirect("/");
})

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Express' });
});

module.exports = router;
