const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 1000;
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb+srv://anulodhi:anurag12345@cluster0.yp3x82j.mongodb.net/?retryWrites=true&w=majority';
//Import routes
const petRoutes = require('./routes/petRoutes')
app.use('/api',petRoutes);


app.get('/', (req,res) => {
     res.send("WELCOME TO PET APP");
});


mongoose.connect(CONNECTION_URI ,() => 
console.log("Connected to Database"));

app.listen(port, () => console.log(`Listening on port ${port}`));

