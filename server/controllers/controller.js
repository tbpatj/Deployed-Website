// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'f921e592eb454a14bce289f925ddfd90',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

module.exports = {
    test: (req,res) => {
        rollbar.log("yup hit me");
        console.log("yeah boy");
        res.status(200).send("yeah you hit em")
    }
}