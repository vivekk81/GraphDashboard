const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(express.json());

//  Import all routes.
const charts = require("./routes/chart");

app.use("/api/v1", charts);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
});

module.exports = app;