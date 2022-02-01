const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
dbURI = 'mongodb+srv://uidesigner:1234@cluster0.gxija.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI);




app.listen(3000, () => {
    console.log("Server has started");
});