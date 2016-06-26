'use strict';

function Game() {
  this.DEFAULT_BOWLING_PINS = 10;
  this.bowlingPins = this.DEFAULT_BOWLING_PINS;
};

var score = [];

Game.prototype.currentPinsStanding = function() {
  return this.bowlingPins;
}

Game.prototype.throwBall = function() {
  this.bowlingPins = Math.floor((Math.random() * 10) + 1);
}

Game.prototype.saveScore = function() {
  score.push(this.bowlingPins);
}
