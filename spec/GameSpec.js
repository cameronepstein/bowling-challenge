'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("can create a game", function() {
    expect(game).not.toEqual(null);
  });

  // it("starts with 10 pins standing", function() {
  //   expect(game.currentPinsStanding()).toEqual(10);
  // });
  //
  // it("allows user to throw ball", function() {
  //   expect(game.throwBall()).toBeUndefined();
  // });
  //
  // it("changes amount of standing pins when ball is thrown", function() {
  //   game.throwBall();
  //   expect(game.currentPinsStanding()).toBeLessThan(11);
  // });
  //
  // describe('Score', function() {
  //    it('is saved after #throwBall', function() {
  //      game.throwBall();
  //      expect(game.saveScore()).toHaveBeenCalled();
  //    });
  // });
});
