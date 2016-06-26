'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts with 10 pins standing", function() {
    expect(game.currentPinsStanding()).toEqual(10);
  });
});
