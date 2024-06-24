var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors());

const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  iata_code: String,
  _geoloc: {
    lat: Number,
    lng: Number
  },
  links_count: Number,
  objectID: String
}, { collection: 'airports' });

const Airport = mongoose.model('Airport', airportSchema);

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected successfully to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});



router.post('/events/:artist', async (req, res) => {
  const { artist } = req.body;

  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=wfOQvUCGqGfQ5DnAW9TKUZ6M8TO1XfLP&keyword=${artist}&sort=date,asc`);
    const data = await response.json();

    
    const concerts = data._embedded.events;

    res.json(concerts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


router.post('/flights', async (req, res) => {
  const { city, date } = req.body;

  const fromEntityId = 'BOS';  
  const airports = await Airport.find({ city: city });
  const toEntityId = airports[0].iata_code;
  
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 5);
  const formattedDate = newDate.toISOString().split('T')[0];
  const departDate = formattedDate;

  const url = `https://sky-scanner3.p.rapidapi.com/flights/cheapest-one-way?fromEntityId=${fromEntityId}&toEntityId=${toEntityId}&departDate=${departDate}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '487b32aa85msh0e54bb90330fae0p1e2ea6jsnbf506a28dfe0',
      'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const results = await response.json();

    const flights = results.data;
    res.json({
      flights: flights,
      iata: toEntityId
    });

  } catch (error) {
    console.error(error);
  }
})



module.exports = router;
