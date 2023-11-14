const http = require('http');
const connectdb = require('./mongodb/db.js');
const MyModel = require('./schema/usermodel.js');
const app = http.createServer(function(req, res) {
  res.end("Hello world");
});

connectdb();

app.listen(8080, function() {
  console.log("Server is running on the port 8080");
});
