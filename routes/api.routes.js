const validation = require("../middleware/validation");
const countryController = require("../controllers/api/country.controller");
const stateController = require("../controllers/api/state.controller");
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get('/api/country' ,countryController.index);
    app.get('/api/:country/state/' ,stateController.index);
}