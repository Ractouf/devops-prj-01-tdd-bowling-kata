class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let i = 0; i < 10; i++) {
      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      score += frameScore;
      rollIndex += 2;
    }
    return score;
  }
}

module.exports = BowlingGame;
