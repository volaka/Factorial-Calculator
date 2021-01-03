var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Send post request to / with body {"number": <int>number}')
});

router.post('/', function(req, res, next) {
  if (req.body.number || req.body.number === 0 ) {
    res.send(rFact(req.body.number).toString())
  } else {
    res.send('Send post request to / with body {"number": <int>number}')
  }
});

function rFact(num) {
  if (num < 0) return "Please enter a positive number"
  else if (num === 0) return 1;
  else return num * rFact( num - 1 );
}

module.exports = router;
