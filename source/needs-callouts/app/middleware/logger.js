const moment = require("moment");

const logger = (req, res, next) => {
    console.log(`${moment().format()}`);
    console.log(`\tProtocol:\t${req.protocol}`);
    console.log(`\tHost:\t\t${req.get('Host')}`);
    console.log(`\tOriginal Url:\t${req.originalUrl}`);
    // console.log(`${req.protocol}://${req.get('Host')}${req.originalUrl}: ${moment().format()}`)
    next();
}

module.exports = logger;