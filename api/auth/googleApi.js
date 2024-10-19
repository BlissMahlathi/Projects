const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Your credentials
const oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// Scopes required
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Generate Auth URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('Authorize this app by visiting this URL:', authUrl);

// After the user authorizes, you'll get a code that you can exchange for a token
// oauth2Client.getToken(code, (err, token) => {
//   if (err) return console.error('Error retrieving access token', err);
//   oauth2Client.setCredentials(token);
//   console.log('Access token:', token);
// });

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const email = `
To: recipient@example.com
Subject: Your Subject Here

This is the email body.
`;

const encodedMessage = Buffer.from(email).toString('base64');

gmail.users.messages.send({
  userId: 'me',
  requestBody: {
    raw: encodedMessage,
  },
});
