const ejs = require('ejs');

function renderer(filepath, options, callback) {
    //  All EJS views rendered need to have a view model object that
    //  defines various things such as the meta tag values for the layout
    //  and the actual path to the layout file to use.
    //
    //  If no view model is given, we'll return an error
    if (!options.viewModel) callback(new Error('No view model supplied'));

    //  First we need to render the view EJS
    ejs.renderFile(filepath, options.viewModel, null, (viewError, viewRender) => {
        //  If there was an error rendering the view, immediatly call back
        if (viewError) callback(viewError);

        //  No error rendering the view, so now we need to render the
        //  layout for the view, injecting the view render into the layout
        //  We'll do this by adding a property to the view model call viewRender
        //  that will be rendered within the layout
        options.viewModel.body = viewRender;
        ejs.renderFile(options.viewModel.layout, options.viewModel, null, (layoutError, layoutRender) => {
            //  if there was an error rendering the layout, immediatly call back
            if (layoutError) callback(layoutError);

            //  No errors rendering the layout, or the view previously, so we
            //  can safely callback with the result
            callback(null, layoutRender);
        });
    });
}

module.exports = renderer;
