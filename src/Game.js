'use strict';

var Game = function() {
  this.currentScore = [];
};

Game.prototype.throw = function(bowlingPins) {
  this.currentScore.push(bowlingPins);
};

Game.prototype.finalScore = function() {
  var score = 0;
  var throws = 0;
  var game = this;

  for (var frame = 0; frame < 10; frame++) {
    isAStrike() ? addAStrike() : checkForSpare();
  }
  return score;

  // HELPERS

  function checkForSpare() {
    isASpare() ? addASpare() : addNormalScore();
  }

  function isASpare() {
    return game.currentScore[throws] + game.currentScore[throws + 1] == 10;
  }

  function addASpare() {
    score += game.currentScore[throws] + game.currentScore[throws + 1] + game.currentScore[throws + 2];
      throws += 2;
  }

  function isAStrike() {
    return game.currentScore[throws] == 10;
  }

  function addAStrike() {
    score += game.currentScore[throws] + game.currentScore[throws + 1] + game.currentScore[throws + 2];
      throws += 1;
  }

  function addNormalScore() {
    score += game.currentScore[throws] + game.currentScore[throws + 1];
    throws += 2;
  }
};



// // if foo is true, return bar(); if foo is false, bar() is skipped and false is returned
// for the left side and quux() is returned;

// ( foo && bar() ) || quux();
