var express = require('express');
var router = express.Router();
const parseCSV = require('../public/javascripts/parseCSV.js');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const RValueArray = await parseCSV('./data.csv');
    res.status(200).send(RValueArray);
  } catch (error) {
    console.error('Error fetching R values:', error.message);
    res.status(500).send('Error fetching R values');
  }
});

module.exports = router;
