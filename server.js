const express = require('express'); //commonJS pattern
const path = require('path'); //built-in module
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000; //web server port
const app = express();

//setup public directory for static contents
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//routing
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//startup
app.listen(port, function () {
  console.log(`server is listening on port: ${port}`);
});