var express = require('express');
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require('google-auth-library'); 

async function getUserData(access_token) {
  const resposne = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${acess_token}`);
  const data = await response.json();
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
    await oAuth2Client.setCredentials(res.token);
    console.log('Tokens.required');
    const user = oAuth2Client.credentials;
    console.log('credentials', user);
    await getUserData(user.access_token);
    next();

  } catch (err) {
    console.log('Error with signing in with Google');
  }
});

module.exports = router;