const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Sequelize = require('sequelize')

const app = express();
//const controller = require('./controllers/auth.controller');
// setTZ('Asia/Calcutta')


var corsOptions = {
  origin: "http://localhost:5020"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server online" });
});


// Routers
const ProductRouter = require('./routes/Products')
// require('./routes/auth.routes')(app);


// Routes
app.use('/api/product', ProductRouter)

// set port, listen for requests
const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
