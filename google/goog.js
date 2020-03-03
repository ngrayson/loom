// const {google} = require('googleapis');

// const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// const TOKEN_PATH = './google/token.json'
// const fs = require('fs');
// const readline = require('readline')

// fs.readFile('./db/Gcredentials.json',(err,content) => {
//     if(err) return log('Error loading client secret file:\n' + err,true)
//     authorize(JSON.parse(content),listFiles);
// });

// function authorize(credentials, callback) {
//     const {client_secret, client_id, redirect_uris} = credentials.installed;
//     const oAuth2Client = new google.auth.OAuth2(
//         client_id, client_secret, redirect_uris[0]);

//     // Check if we have previously stored a token.
//     fs.readFile(TOKEN_PATH, (err, token) => {
//       if (err) return getAccessToken(oAuth2Client, callback);
//       oAuth2Client.setCredentials(JSON.parse(token));
//       callback(oAuth2Client);
//     });
// }

// function getAccessToken(oAuth2Client, callback) {
//     const authUrl = oAuth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: SCOPES,
//     });
//     console.log('Authorize this app by visiting this url:', authUrl);
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     rl.question('Enter the code from that page here: ', (code) => {
//       rl.close();
//       oAuth2Client.getToken(code, (err, token) => {
//         if (err) return console.error('Error retrieving access token', err);
//         oAuth2Client.setCredentials(token);
//         // Store the token to disk for later program executions
//         fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//           if (err) return console.error(err);
//           console.log('Token stored to', TOKEN_PATH);
//         });
//         callback(oAuth2Client);
//       });
//     });
//   }
  
//   /**
//    * Lists the names and IDs of up to 10 files.
//    * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//    */
//   function listFiles(auth) {
//     const drive = google.drive({version: 'v3', auth});
//     drive.files.list({
//       pageSize: 10,
//       fields: 'nextPageToken, files(id, name)',
//     }, (err, res) => {
//       if (err) return console.log('The API returned an error: ' + err);
//       const files = res.data.files;
//       if (files.length) {
//         console.log('Files:');
//         files.map((file) => {
//           console.log(`${file.name} (${file.id})`);
//         });
//       } else {
//         console.log('No files found.');
//       }
//     });
//   }