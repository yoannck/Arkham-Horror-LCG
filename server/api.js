const express = require('express');
const path = require('path');
const router = express.Router();
const assets = path.resolve(__dirname, 'assets/');
const helper = require('./helper');

router.get('/campaigns', function(req, res){
  res.send(helper.campaigns);
});
router.get('/difficulties', function(req, res){
  res.send(helper.difficulties);
});
router.get('/characters', function(req, res){
  res.send(helper.characters);
});
router.get('/character', function(req, res){
  const id = req.query.id;
  const module = require(assets + '/' + helper.characters.find(function(c) { return c.id === id }).path);
  const character = JSON.parse(JSON.stringify(module));
  character.weakness.push(helper.knuthShuffle(helper.weakness.weakness).slice(0).pop());
  character.stack = helper.knuthShuffle(character.assets.concat(character.events, character.skills, character.weakness));
  res.send(character);
});

module.exports = router;
