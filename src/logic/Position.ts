import { Rank } from "../types";

class Position {
  constructor(private x: Rank, private y: Rank) {}

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getXDiff(position: Position) {
    return Math.abs(this.x - position.x);
  }

  getYDiff(position: Position) {
    return Math.abs(this.y - position.y);
  }

  getDiagonals() {
    const diagonals = [];
    for (let i = 0; i < 8; i++) {
      if (this.x + i < 8 && this.y + i < 8) {
        diagonals.push(
          new Position((this.x + i) as Rank, (this.y + i) as Rank)
        );
      }
      if (this.x + i < 8 && this.y - i >= 0) {
        diagonals.push(
          new Position((this.x + i) as Rank, (this.y - i) as Rank)
        );
      }
      if (this.x - i >= 0 && this.y + i < 8) {
        diagonals.push(
          new Position((this.x - i) as Rank, (this.y + i) as Rank)
        );
      }
      if (this.x - i >= 0 && this.y - i >= 0) {
        diagonals.push(
          new Position((this.x - i) as Rank, (this.y - i) as Rank)
        );
      }
    }
    return diagonals;
  }

  getHorizontals() {
    const horizontals = [];
    for (let i = 0; i < 8; i++) {
      if (this.x + i < 8) {
        horizontals.push(new Position((this.x + i) as Rank, this.y));
      }
      if (this.x - i >= 0) {
        horizontals.push(new Position((this.x - i) as Rank, this.y));
      }
    }
    return horizontals;
  }

  arePosiotionsEqual(position: Position) {
    return this.x === position.x && this.y === position.y;
  }
}

export default Position;
