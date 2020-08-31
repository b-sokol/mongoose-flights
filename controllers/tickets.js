const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
//   addToFlight,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    Ticket.find({flight: flight.id}, (err, tickets) => {
      res.render('tickets/new', {
        title: 'Add Ticket',
        tickets,
      });
    });
  });
}

function create(req, res) {
  Ticket.create(req.body, (err, ticket) => {
    res.redirect('/tickets/');
  });
}

// function addToFlight(req, res) {
//   Flight.findById(req.params.id, (err, flight) => {
//     Ticket.findById({ flight: flight._id }, (err, tickets) => {
//       ticket.flight.push(req.body.flightId);
//       tickets.save((err) => {
//         res.redirect(`/flights/show`);
//       });
//     });
//   });
// }
