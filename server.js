const express = require('express');
const path = require('path');
// Initialize express
const app = express();

// Serve express static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Get request to API route
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Welcome to React Node Server !!!"}');
});


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
// Set server port
const PORT = process.env.PORT || 4000;

// App listening on port 4000
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
