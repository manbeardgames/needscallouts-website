const express = require('express');
const errorHandling = require('./middleware/errorhandling');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const config = require('../config/config');
const fs = require('fs');

const app = express();

//  Load any configurations or variables that need to be set at an app level


//  Set the local values
app.set('meta', config.meta);

//  Get the port from the environment variable otherwise manually set it at 3000
const PORT = process.env.PORT || 3000;

//  Configure EJS view engine
app.engine('ejs', require('./rendering-engine'));
// app.engine('custom-renderer', require('./rendering-engine'));
app.set('view engine', 'ejs');
// app.use(expressLayouts);
app.set('layouts', path.join(__dirname, 'views', 'layouts'));

//  Set the default 'views' directory as the one inside the 'app' directory.
app.set('views', path.join(__dirname, 'views'));

//  Set our static folder as the 'public' directory inside the 'app' directory.
app.use(express.static(path.join(__dirname, 'public')));

//  Add the ability to parse incomding JSON payloads for future API development.
app.use(express.json());

//  Disable URL Encoded Extended. This means query strings are parsed using the
//  querystring library instead of the qs library.
app.use(express.urlencoded({ extended: false }));

//  Setup the application routes.
app.use('/', require('./routes/index'));

// app.use(errorHandling.fourOhFour);
// app.use(errorHandling.handleError);

//  Start server and listen for requests.
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
