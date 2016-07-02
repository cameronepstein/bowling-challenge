'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("can create a game", function() {
    expect(game).not.toEqual(null);
  });

  it("can score a gutter game", function() {
    playGame(0, 20);
    expect(game.finalScore()).toBe(0);
  });

  it("can complete a game scoring 1 each frame", function() {
    playGame(1, 20);
    expect(game.finalScore()).toBe(20);
  });

  it("can score a spare", function() {
    game.throw(9);
    game.throw(1);
    game.throw(1);
    playGame(0, 17);
    expect(game.finalScore()).toBe(12);
  })

  it("can score a strike", function() {
    game.throw(10);
    game.throw(1);
    game.throw(1);
    playGame(0, 16);
    expect(game.finalScore()).toBe(14);
  })

  it("can score a perfect game", function() {
    playGame(10, 20);
    expect(game.finalScore()).toBe(300);
  })

  // HELPERS

  var playGame = function(bowlingPins, throws) {
    for (var i = 0; i < throws; i++) {
      game.throw(bowlingPins);
    }
  };

});
