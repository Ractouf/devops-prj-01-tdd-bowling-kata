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
      if (this.isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }

      let frameScore = this.sumFrame(rollIndex);

      if (this.isSpare(frameScore)) score += this.spareBonus(rollIndex);
      else score += frameScore;

      rollIndex += 2;
    }
    return score;
  }

  sumFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
  strikeBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }
}

module.exports = BowlingGame;
