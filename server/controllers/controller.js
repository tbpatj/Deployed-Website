const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'e52add0a647d4556a072c2b6b52cbf86',
  captureUncaught: true,
  captureUnhandledRejections: true
});


module.exports = {
    test: (req,res) => {
        rollbar.log("yup hit me");
        console.log("yeah boy");
    }
}