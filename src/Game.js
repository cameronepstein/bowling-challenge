'use strict';

var Game = function() {
  this.currentScore = [];
};

Game.prototype.throw = function(bowlingPins) {
  this.currentScore.push(bowlingPins);
};

Game.prototype.finalScore = function() {
  var score = 0;
  for (var i = 0; i < 20; i++) {
      score += this.currentScore[i];
  }
  return score;
};
