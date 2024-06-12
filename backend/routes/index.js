var express = require('express');
var router = express.Router();

const cors = require('cors');
router.use(cors())

// router.get('/', async (req, res) => {
//   try {
//     const apiKey = 'YOUR_TICKETMASTER_API_KEY';
//     const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=wfOQvUCGqGfQ5DnAW9TKUZ6M8TO1XfLP&keyword=${artist}&sort=date,asc`);
//     const data = await response.json();      
//     const concerts = data._embedded.events;

        
//     res.json(concerts);
//   } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

router.post('/', async (req, res) => {
  const { artist } = req.body;
  console.log(artist);

  try {
    // Make API call to external API
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=wfOQvUCGqGfQ5DnAW9TKUZ6M8TO1XfLP&keyword=${artist}&sort=date,asc`);
    const data = await response.json();

    
    const concerts = data._embedded.events;

    res.json(concerts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
