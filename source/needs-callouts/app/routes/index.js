const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (request, response) => {
    //  Model object that is passed to the view
    const viewModel = {};

    //  Set the meta data properites that are assigned
    //  to the <meta> tags in the layout
    viewModel.meta = request.app.get('meta');
    viewModel.meta.title = 'Needs Callouts Free Company';
    viewModel.meta.description = 'The official website of the Need Callouts Free Company';
    viewModel.meta.author = 'Christopher Whitley';
    viewModel.meta.siteName = 'Needs Callouts Free Company';
    viewModel.meta.url = `${request.protocol}://${request.get('Host')}${request.originalUrl}`;
    viewModel.meta.type = 'website';
    viewModel.meta.local = 'en-US';
    viewModel.meta.image = '/image/og-spriggan.webp';

    viewModel.body = 'index';

    response.render('index/layout', viewModel);

    // //  Set the path to the layout EJS file to use for this view.
    // viewModel.layout = path.join(request.app.get('layouts'), 'default.ejs');

    // //  Render the view
    // response.render('index', {viewModel});
});

module.exports = router;
