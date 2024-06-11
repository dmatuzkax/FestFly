var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
  try {
    const apiKey = 'YOUR_TICKETMASTER_API_KEY';
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=wfOQvUCGqGfQ5DnAW9TKUZ6M8TO1XfLP&keyword=JID&sort=date,asc&size=1`);
    const data = await response.json();      
    const concerts = data._embedded.events;

        
    res.json(concerts);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
