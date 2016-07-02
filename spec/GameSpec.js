'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("can create a game", function() {
    expect(game).not.toEqual(null);
  });

  it("can roll a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.throw(0);
    }
    expect(game.finalScore()).toBe(0);
  });

  it("can complete a game scoring 1 each frame", function() {
    for (var i = 0; i < 20; i++) {
      game.throw(1);
    }
    expect(game.finalScore()).toBe(20);
  });

});
