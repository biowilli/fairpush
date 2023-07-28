const express = require('express');
const Pusher = require('pusher-client');
const sseMiddleware = require('sse-middleware');

// Create a new express app
const app = express();

// Your Pusher app credentials
const PUSHER_APP_ID = '1534797';
const PUSHER_APP_KEY = 'dcd708b64396c779c954';
const PUSHER_APP_SECRET = 'd017852fad02871c9ebf';
const PUSHER_APP_CLUSTER = 'eu';

// Create a new Pusher client
const pusher = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_APP_CLUSTER,
  secret: PUSHER_APP_SECRET, 
  channel_data: {
    user_id: PUSHER_APP_ID
  }
});

const cors = require('cors')

app.use(sseMiddleware) // Use this after the variable declaration

/* 
app.get('/sse', sseMiddleware(), (req, res) => {
  const channel = pusher.subscribe('server-channel');
  channel.bind('server-event', data => {
    console.log(`Received message: ${data}`);
    // Send the data to the frontend using SSE
    res.sse('message', { data });
  });
}); */

app.get('/sse', (req, res) => {
  // Send an SSE event to the client
  res.sse('message', { text: 'Hello, World!' });
});


// Listen for incoming HTTP requests
app.listen(3000, () => {
  console.log('Listening on port 3000');
});