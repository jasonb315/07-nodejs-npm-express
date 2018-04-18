'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});

app.use (express.static('./public') );

app.get('/new', (request,response) => {
  response.sendFile('new.html', {root: './public'});
});

// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', bodyParser, (request, response) =>  {  
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
  response.send('Record posted to server!!');
});

