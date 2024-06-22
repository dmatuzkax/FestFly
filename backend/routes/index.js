var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors())

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

  const fromEntityId = 'BOS';  // Boston Logan International Airport IATA code
  const toEntityId = 'LHR';    // London Heathrow Airport IATA code
  const departDate = '2024-06-23';  // Departure date

  const url = `https://sky-scanner3.p.rapidapi.com/flights/cheapest-one-way?fromEntityId=${fromEntityId}&toEntityId=${toEntityId}&departDate=${departDate}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c77a7ca544msh9483cb27bc8eaacp1932e0jsndcd300366e1a',
      'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})



module.exports = router;
