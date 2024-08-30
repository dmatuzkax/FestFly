var express = require('express');
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library'); 

async function getUserData(access_token) {
  const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
  const data = await response.json();
  return data;
}

router.get('/', async (req, res, next) => {
  const code = req.query.code;
  try {
    const redirectUrl = 'http://localhost:3001/oauth';
    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );
    const response = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(response.tokens);
    console.log('Tokens acquired.');
    const user = oAuth2Client.credentials;
    console.log('credentials', user);
    const data = await getUserData(oAuth2Client.credentials.access_token);
    res.redirect(303, `http://localhost:3000/home?user=${data.given_name}`);

  } catch (err) {
    console.log('Error with signing in with Google', err);
  }

  
});

module.exports = router;