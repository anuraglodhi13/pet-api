const express = require('express');
const PetModels = require('../models/petModel');
const router = express.Router();
const render = require('xlsx');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://anulodhi:anurag12345@cluster0.yp3x82j.mongodb.net/?retryWrites=true&w=majority/";

// A GET route “/api/pet” to get all the pets in the database
router.get('/pet', (req,res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("petmodels").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
    db.close();
  });
});
});

// A POST route “/api/pet” to add pets from an excel file
const file = render.readFile("test.xlsx");
const sheetData = render.utils.sheet_to_json(file.Sheets['Sheet1']);

router.post('/pet',(req,res) => {
  try{
    PetModels.insertMany(sheetData);
    res.json(sheetData);
  }
  catch (err) {
    res.json({message: err});
  }

});

// A GET route “/api/pet/<petId>” to get a specific pet (petId will be a dynamic value eg. /api/pet/62d7ec61ef051e361f3a6baa)
router.get('/pet/:petid', async(req,res) => {
  try {
    const getPost = await PetModels.findById(req.params.petid);
    res.json(getPost);
  }	
  catch (err) {
    res.json({message: err});
  }
});
  
//A PATCH route “/api/pet/<petId>” to update the details of a specific pet
router.patch('/pet/:petid', async(req,res) => {
  try {
    const updatePost = await PetModels.updateOne(
      {_id: req.params.petid},
      {$set: { Name:"Husky" }});
      res.json(updatePost);
  }
  catch (err) {
    res.json({message: err});
  }
  
});

// A DELETE route “/api/pet/<petId>” to delete a specific pet
router.delete('/pet/:petid', async(req,res) => {
  try {
    const removePost = await PetModels.remove({_id: req.params.petid});
    res.json(removePost)
  }
  catch (err) {
    res.json({message: err});
  }
});

module.exports = router;