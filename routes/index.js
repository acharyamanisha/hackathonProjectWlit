var express = require("express");
var router = express.Router();
const Events = require("../models/events");

/* GET home page. */
router.get("/", function (req, res) {
  Events.find().then((events) => {
    res.render("index", { title: "ReadyForSewa", eventList: events });
  });
});
router.post("/saveEvent", async function (req, res) {
  let event = new Events({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
  });
  await Events.insertMany(event);
  res.redirect("/events");
});

router.get("/calender", async function (req, res, next) {
  const events = await Events.find();
  res.render("calender", { eventList: events });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
  res.render("index");
});

router.get("/events", async function (req, res) {
  const events = await Events.find();
  res.render("events", { title: "ReadyForSewa", eventList: events });
});

router.get("/addEvent", function (req, res) {
  res.render("addEvent");
});
router.post("/saveEvent", async function (req, res) {
  let event = new Events({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
  });
  await Events.insertMany(event);
  res.redirect("events");
});

module.exports = router;
