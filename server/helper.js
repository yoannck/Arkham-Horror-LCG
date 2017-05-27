const path = require('path');
const assets = path.resolve(__dirname, 'assets/');
const weakness = require(assets + '/basic.weakness.json');
module.exports = {
  campaigns: [
    { label: 'Core - 1. The Gathering', path: 'core.campaign.1.json'},
    { label: 'Core - 2. The Midnight Masks', path: 'core.campaign.2.json'},
    { label: 'Core - 3. The Devourer Below', path: 'core.campaign.3.json'}
  ],
  difficulties: [
    { label: 'Easy', path: 'chaos.easy.json'},
    { label: 'Standard', path: 'chaos.standard.json'},
    { label: 'Hard', path: 'chaos.hard.json'},
    { label: 'Expert', path: 'chaos.expert.json'}
  ],
  characters: [
    { id: 'sab', label: 'Agnes Backer', path: 'starter.agnes.backer.json'},
    { id: 'sdw', label: 'Daisy Walker', path: 'starter.daisy.walker.json'},
    { id: 'srb', label: 'Rolland Banks', path: 'starter.rolland.banks.json'},
    { id: 'sst', label: 'Skids O Toole', path: 'starter.skids.otoole.json'},
    { id: 'swa', label: 'Wendy Adams', path: 'starter.wendy.adams.json'},
  ],
  weakness: weakness,

  knuthShuffle: function(array) {
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex = null;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
};
