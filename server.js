const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require('request');
const fs = require('fs');
const uuid = require('node-uuid');
const api = require('./server/api');
const app = express();
const helper = require('./server/helper');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(__dirname + "/public"));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const assets = path.resolve(__dirname, 'server/assets/');

const port = process.env.PORT || 8081;
const server = app.listen(port, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});
let io = require('socket.io')(server);
io.set("origins", "*:*");

let hosts = [];
io.on('connection', function (socket) {
  console.log('new connection / user');

  io.emit('hosts', hosts);

  socket.on('new-host', (host) => {
    host.id = uuid.v1();

    const module = require(assets + '/' + helper.campaigns.find(function(c) { return c.label === host.name }).path);
    host.campaign = JSON.parse(JSON.stringify(module));
    host.campaign.encounter = helper.knuthShuffle(host.campaign.encounter);

    const difficulty = require(assets + '/' + helper.difficulties.find(function(c) { return c.label === host.difficulty }).path);
    host.chaos = difficulty.chaos;

    // FIRST AGENDA / ACT
    host.campaign.agenda_active = host.campaign.agenda.shift();
    host.campaign.act_active = host.campaign.act.shift();

    host.dooms = 0;
    host.clues = 0;
    host.locations = [];
    host.encounters = [];
    host.ediscard = [];
    host.charges = [];
    host.campaign.setup.forEach( function(x) { host.charges.push({ id: x, charge: 0 }) })

    hosts.push(host);

    io.emit('hosts', hosts);
  });
  socket.on('join-host', (host) => {
    const h = hosts.find(function(x) { return x.id === host.id });
    h.characters.push(host.deck);
    io.emit('hosts', hosts);
    io.emit('host', h);
  });
  socket.on('update-host', (host) => {
    const index = hosts.findIndex(function(x) { return x.id === host.id });
    if (index >= 0) {
      hosts[index] = host;
      socket.broadcast.emit('host', host); // ALL CLIENTS EXCEPT THE ONE WHO EMITS
    }
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
