const createError = require("http-errors");

const fourOhFour = (request, response, next) => {
  next(createError(404));
};

const handleError = (error, request, response, next) => {
  //  Set local values
  response.locals.message = error.message;

  //  Only set full error if we are in development
  response.locals.error = request.app.get("env") === "development" ? error : {};

  //  Set the status code
  response.status(error.status || 500);

  //  Render the error page
  response.render("error");
};

exports.fourOhFour = fourOhFour;
exports.handleError = handleError;
