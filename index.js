const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server listening on port " + port));
const coffee = require('./routes/coffee');
const emplos = require('./routes/employee');
const cors = require('cors');
app.use(express.json());

app.use(function (req, res, next) {
    console.log(req);
    console.log(req.body);
    next();
});

app.use(cors());


app.use('/orders', coffee);
app.use('/employees', emplos);


