// const admin = require('firebase-admin');
// require("dotenv").config();

// // Load environment variables for Firebase service account
// const serviceAccount = {
//   type: process.env.FIREBASE_TYPE,
//   project_id: process.env.FIREBASE_PROJECT_ID,
//   private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
//   private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//   client_email: process.env.FIREBASE_CLIENT_EMAIL,
//   client_id: process.env.FIREBASE_CLIENT_ID,
//   auth_uri: process.env.FIREBASE_AUTH_URI,
//   token_uri: process.env.FIREBASE_TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
//   client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
// };

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// // Function to send push notifications
// const sendNotification = (token, title, body) => {
//   const message = {
//     notification: {
//       title,
//       body
//     },
//     token
//   };

//   admin.messaging().send(message)
//     .then((response) => {
//       console.log('Successfully sent message:', response);
//     })
//     .catch((error) => {
//       console.error('Error sending message:', error);
//     });
// };

// module.exports = sendNotification;
