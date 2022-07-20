const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const render = require('xlsx');
const port = process.env.PORT || 1000;
//Import routes
const petRoutes = require('./routes/petRoutes')
app.use('/api',petRoutes);


app.get('/', (req,res) => {
     res.send("WELCOME TO PET APP");
});


mongoose.connect('mongodb+srv://anulodhi:anurag12345@cluster0.yp3x82j.mongodb.net/?retryWrites=true&w=majority ', () => 
console.log("Connected to Database"));

app.listen(port, () => console.log(`Listening on port ${port}`));