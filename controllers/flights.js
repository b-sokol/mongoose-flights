const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, (err, flights) => {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    res.render('flights/show', { title: 'Flight Detail', flight });
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', { title: 'New Flight', departsDate });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save((err) => {
    if (err) return res.render('/flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}
