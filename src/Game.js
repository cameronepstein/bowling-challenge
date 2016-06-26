'use strict';

function Game() {
  this.DEFAULT_BOWLING_PINS = 10;
  this.bowlingPins = this.DEFAULT_BOWLING_PINS;
};

Game.prototype.currentPinsStanding = function() {
  return this.bowlingPins;
}
